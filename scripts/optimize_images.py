import os
import shutil
from PIL import Image

SOURCE_DIR = "/Users/justduckit/Desktop/Veewebsite"
BASE_MEDIA = os.path.join(SOURCE_DIR, "public", "media", "vee")

ORIGINALS_DIR = os.path.join(BASE_MEDIA, "originals")
HERO_DIR = os.path.join(BASE_MEDIA, "hero")
CARD_DIR = os.path.join(BASE_MEDIA, "card")
THUMB_DIR = os.path.join(BASE_MEDIA, "thumb")

for d in [ORIGINALS_DIR, HERO_DIR, CARD_DIR, THUMB_DIR]:
    os.makedirs(d, exist_ok=True)

IMAGE_FILES = [
    "Profpic.webp",
    "Headshot1.webp",
    "DDVeephoto.webp",
    "DDNYC1.webp",
    "CherryDDL.webp",
    "MaryDDL.webp",
    "BowDAO.webp",
    "Veebanner.jpg",
    "Veelogo.jpg",
    "article1.jpg",
    "article2.jpg",
]

def process_image(filename):
    src_path = os.path.join(SOURCE_DIR, filename)
    if not os.path.exists(src_path):
        print(f"Skipping missing file: {filename}")
        return

    # 1. Copy original
    orig_path = os.path.join(ORIGINALS_DIR, filename)
    shutil.copy2(src_path, orig_path)

    # Base name for webp output
    base_name = os.path.splitext(filename)[0] + ".webp"

    with Image.open(src_path) as img:
        img = img.convert("RGB")
        orig_w, orig_h = img.size

        # Hero (max 1600w, no upscale)
        hero_w = min(orig_w, 1600)
        hero_h = int(orig_h * (hero_w / orig_w))
        hero_img = img.resize((hero_w, hero_h), Image.Resampling.LANCZOS)
        hero_img.save(os.path.join(HERO_DIR, base_name), "WEBP", quality=85)

        # Card (max 800w, no upscale)
        card_w = min(orig_w, 800)
        card_h = int(orig_h * (card_w / orig_w))
        card_img = img.resize((card_w, card_h), Image.Resampling.LANCZOS)
        card_img.save(os.path.join(CARD_DIR, base_name), "WEBP", quality=85)

        # Thumb (max 400w, no upscale)
        thumb_w = min(orig_w, 400)
        thumb_h = int(orig_h * (thumb_w / orig_w))
        thumb_img = img.resize((thumb_w, thumb_h), Image.Resampling.LANCZOS)
        thumb_img.save(os.path.join(THUMB_DIR, base_name), "WEBP", quality=85)

        print(f"Processed {filename}: Orig={orig_w}x{orig_h} -> Hero={hero_w}x{hero_h}, Card={card_w}x{card_h}, Thumb={thumb_w}x{thumb_h}")

if __name__ == "__main__":
    for f in IMAGE_FILES:
        process_image(f)
