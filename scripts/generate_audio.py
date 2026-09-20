#!/usr/bin/env python3
import hashlib
import json
import os
import time
import urllib.error
import urllib.request
from pathlib import Path

MODEL = "gpt-4o-mini-tts"
VOICE = "marin"
SPEED = 0.95
INSTRUCTIONS = (
    "Speak the Spanish exactly as written. Use a natural native Latin American Spanish accent, "
    "warm and conversational, clear for a language learner, at a normal relaxed pace. "
    "Do not spell the word, do not add explanations, and do not add any extra words."
)

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
AUDIO_DIR.mkdir(exist_ok=True)

def filename_for(text: str) -> str:
    digest = hashlib.sha1(text.encode("utf-8")).hexdigest()[:18]
    return f"{digest}.mp3"

def generate(text: str, out_path: Path, api_key: str):
    body = json.dumps({
        "model": MODEL,
        "voice": VOICE,
        "input": text,
        "instructions": INSTRUCTIONS,
        "response_format": "mp3",
        "speed": SPEED,
    }, ensure_ascii=False).encode("utf-8")

    req = urllib.request.Request(
        "https://api.openai.com/v1/audio/speech",
        data=body,
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
        },
        method="POST",
    )

    last_error = None
    for attempt in range(4):
        try:
            with urllib.request.urlopen(req, timeout=120) as resp:
                out_path.write_bytes(resp.read())
            return
        except urllib.error.HTTPError as e:
            details = e.read().decode("utf-8", errors="replace")
            last_error = RuntimeError(f"OpenAI TTS HTTP {e.code}: {details}")
            if e.code not in (429, 500, 502, 503, 504):
                break
        except Exception as e:
            last_error = e
        time.sleep(2 ** attempt)

    raise last_error or RuntimeError("Unknown TTS generation failure")

def main():
    api_key = os.getenv("OPENAI_API_KEY", "").strip()
    unique_phrases = list(dict.fromkeys(PHRASES))
    manifest = {}

    if not api_key:
        print("OPENAI_API_KEY is not configured. Deploying with browser TTS fallback.")
        MANIFEST_PATH.write_text("{}", encoding="utf-8")
        return

    for i, text in enumerate(unique_phrases, 1):
        filename = filename_for(text)
        out_path = AUDIO_DIR / filename
        manifest[text] = f"audio/{filename}"

        if out_path.exists() and out_path.stat().st_size > 1000:
            print(f"[{i}/{len(unique_phrases)}] cached: {text}")
            continue

        print(f"[{i}/{len(unique_phrases)}] generating: {text}")
        generate(text, out_path, api_key)

    MANIFEST_PATH.write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )
    print(f"Generated/verified {len(manifest)} high-quality Spanish audio clips.")

if __name__ == "__main__":
    main()
