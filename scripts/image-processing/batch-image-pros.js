// batch-webp.js
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

// === CONFIGURATION ===
const inputDir = "./input";       // folder with original images
const outputDir = "./output";     // folder for exported webp
const maxSize = 2000;                    // max width or height
const webpQuality = 85;                  // quality setting

// Make sure output folder exists
fs.mkdirSync(outputDir, { recursive: true });

// Allowed image types
const allowedExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

async function processFolder() {
  const files = fs.readdirSync(inputDir);

  let index = 11;

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();

    if (!allowedExtensions.has(ext)) {
      console.log(`⚠️ Skipping non-image: ${file}`);
      continue;
    }

    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, `gallery-0${index}.webp`);

    console.log(`🔧 Processing ${file} → gallery-00${index}.webp`);

    try {
      await sharp(inputPath)
        .resize(maxSize, maxSize, {
          fit: "inside",
          withoutEnlargement: true,
        })
        .webp({ quality: webpQuality })
        .toFile(outputPath);

      console.log(`✅ Saved: ${outputPath}`);
      index++;
    } catch (err) {
      console.error(`❌ Error processing ${file}:`, err);
    }
  }

  console.log("\n🎉 Done! All images processed.");
}

await processFolder();
