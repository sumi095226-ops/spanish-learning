#!/usr/bin/env python3
import hashlib
import json
from pathlib import Path

import numpy as np
import soundfile as sf
from kokoro import KPipeline

VOICE = "ef_dora"
LANG_CODE = "e"
SPEED = 1.0
SAMPLE_RATE = 24000
AUDIO_VERSION = "kokoro-v1"

PHRASES = [
    "¿Me puede ayudar?",
    "casa", "mesa", "vino", "hola", "uno",
    "niño", "España", "jamón", "José", "pero", "perro", "hotel",
    "buenos días", "buenas tardes", "buenas noches", "gracias", "por favor",
    "perdón", "adiós", "sí", "no", "bien", "mal", "aquí", "allí", "hoy",
    "mañana", "dos", "tres", "cuatro", "cinco", "diez", "veinte", "cien",
    "agua", "café", "cerveza", "comida", "pan", "pollo", "pescado", "cuenta",
    "aeropuerto", "estación", "billete", "baño", "calle", "derecha", "izquierda",
    "amigo", "amiga", "hombre", "mujer", "ahora", "tarde", "noche", "hora",
    "Soy de Taiwán.", "Ella es médica.", "Somos amigos.", "Estoy bien.",
    "El hotel está aquí.", "Estamos cansados.", "el libro", "la casa",
    "el problema", "un café", "una cerveza", "un hotel", "Hablo español.",
    "¿Hablas inglés?", "Ella trabaja aquí.", "¿Dónde está el baño?",
    "¿Cuánto cuesta?",
    "Hola, ¿cómo te llamas?", "Me llamo Sumi. ¿Y tú?", "Soy Ana. Mucho gusto.",
    "Igualmente.", "Una mesa para una persona, por favor.", "Claro. Por aquí.",
    "Quiero un café y agua, por favor.", "La cuenta, por favor.",
    "Perdón, ¿dónde está la estación?", "Todo recto y luego a la derecha.",
    "¿Está lejos?", "No, está muy cerca.", "Tengo una reserva.",
    "¿A nombre de quién?", "A nombre de Sumi.", "¿A qué hora es el desayuno?",
    "¿Cuánto cuesta esto?", "Cuesta veinte euros.", "¿Puedo pagar con tarjeta?",
    "Sí, claro."
]

ROOT = Path(__file__).resolve().parents[1]
AUDIO_DIR = ROOT / "audio"
MANIFEST_PATH = AUDIO_DIR / "manifest.json"
MANIFEST_JS_PATH = AUDIO_DIR / "manifest.js"
AUDIO_DIR.mkdir(exist_ok=True)

def filename_for(text: str) -> str:
    digest = hashlib.sha1(f"{AUDIO_VERSION}|{VOICE}|{text}".encode("utf-8")).hexdigest()[:18]
    return f"{digest}.wav"

def to_numpy(audio):
    if hasattr(audio, "detach"):
        audio = audio.detach().cpu().numpy()
    return np.asarray(audio, dtype=np.float32).reshape(-1)

def generate_one(pipeline, text: str, out_path: Path):
    chunks = []
    for _, _, audio in pipeline(text, voice=VOICE, speed=SPEED):
        arr = to_numpy(audio)
        if arr.size:
            chunks.append(arr)

    if not chunks:
        raise RuntimeError(f"Kokoro produced no audio for: {text}")

    waveform = np.concatenate(chunks)
    sf.write(out_path, waveform, SAMPLE_RATE, subtype="PCM_16")

def main():
    print(f"Loading Kokoro Spanish pipeline ({VOICE})...")
    pipeline = KPipeline(lang_code=LANG_CODE)

    unique_phrases = list(dict.fromkeys(PHRASES))
    manifest = {}

    for i, text in enumerate(unique_phrases, 1):
        filename = filename_for(text)
        out_path = AUDIO_DIR / filename
        manifest[text] = f"audio/{filename}"

        if out_path.exists() and out_path.stat().st_size > 1500:
            print(f"[{i}/{len(unique_phrases)}] cached: {text}")
            continue

        print(f"[{i}/{len(unique_phrases)}] generating: {text}")
        generate_one(pipeline, text, out_path)

    MANIFEST_PATH.write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    MANIFEST_JS_PATH.write_text(
        "window.KOKORO_AUDIO_MANIFEST = " +
        json.dumps(manifest, ensure_ascii=False, separators=(",", ":")) +
        ";\n",
        encoding="utf-8",
    )
    print(f"Generated/verified {len(manifest)} Kokoro Spanish audio clips with {VOICE}.")

if __name__ == "__main__":
    main()
