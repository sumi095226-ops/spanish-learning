#!/usr/bin/env python3
import base64
import json
import random
from pathlib import Path

import numpy as np
import soundfile as sf
import torch
from chatterbox.mtl_tts import ChatterboxMultilingualTTS

ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "voice-test"
MANIFEST_PATH = OUT_DIR / "chatterbox-manifest.js"

PHRASES = [
    "hola",
    "buenos días",
    "Soy de Taiwán.",
    "Hola, ¿cómo te llamas?",
    "Quiero un café y agua, por favor.",
]

def set_seed(seed=20260920):
    random.seed(seed)
    np.random.seed(seed)
    torch.manual_seed(seed)

def main():
    OUT_DIR.mkdir(exist_ok=True)
    set_seed()

    print("Loading Chatterbox Multilingual V3 on CPU...")
    model = ChatterboxMultilingualTTS.from_pretrained(device=torch.device("cpu"), t3_model="v3")
    manifest = {}

    for i, text in enumerate(PHRASES, 1):
        print(f"[{i}/{len(PHRASES)}] generating: {text}")
        wav = model.generate(
            text,
            language_id="es",
            exaggeration=0.55,
            cfg_weight=0.35,
            temperature=0.8,
            repetition_penalty=1.2,
            min_p=0.05,
            top_p=1.0,
        )
        audio = wav.squeeze().detach().cpu().numpy()
        tmp = OUT_DIR / f"sample-{i}.wav"
        sf.write(tmp, audio, model.sr, subtype="PCM_16")
        encoded = base64.b64encode(tmp.read_bytes()).decode("ascii")
        manifest[text] = f"data:audio/wav;base64,{encoded}"
        tmp.unlink(missing_ok=True)

    MANIFEST_PATH.write_text(
        "window.CHATTERBOX_TEST_AUDIO = " +
        json.dumps(manifest, ensure_ascii=False, separators=(",", ":")) +
        ";\n",
        encoding="utf-8",
    )
    print(f"Wrote {len(manifest)} Chatterbox V3 samples.")

if __name__ == "__main__":
    main()
