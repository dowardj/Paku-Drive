import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import sharp from "sharp";

const rootDir = process.cwd();
const sourceDir = path.join(rootDir, "homes co nz");
const outputDir = path.join(rootDir, "public", "assets", "images");
const manifestPath = path.join(rootDir, "src", "data", "images.generated.json");
const includeSavedPageFiles = process.env.INCLUDE_SAVED_PAGE_FILES === "1";

const allowedExtensions = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const widths = [640, 960, 1280, 1920];

function slugify(fileName) {
  return fileName
    .toLowerCase()
    .replace(/\.[^/.]+$/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function detectMime(buffer) {
  if (buffer.length < 12) return null;
  if (buffer[0] === 0xff && buffer[1] === 0xd8) return "image/jpeg";
  if (
    buffer[0] === 0x89 &&
    buffer[1] === 0x50 &&
    buffer[2] === 0x4e &&
    buffer[3] === 0x47
  )
    return "image/png";
  if (
    buffer[0] === 0x52 &&
    buffer[1] === 0x49 &&
    buffer[2] === 0x46 &&
    buffer[3] === 0x46 &&
    buffer[8] === 0x57 &&
    buffer[9] === 0x45 &&
    buffer[10] === 0x42 &&
    buffer[11] === 0x50
  )
    return "image/webp";
  return null;
}

function extFromMime(mime) {
  if (mime === "image/jpeg") return ".jpg";
  if (mime === "image/png") return ".png";
  if (mime === "image/webp") return ".webp";
  return ".img";
}

async function walk(dirPath) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dirPath, entry.name);
      if (entry.isDirectory()) return walk(fullPath);
      return fullPath;
    }),
  );
  return files.flat();
}

async function main() {
  await fs.mkdir(outputDir, { recursive: true });
  const allFiles = await walk(sourceDir);
  const selected = [];
  const seenHashes = new Set();

  for (const filePath of allFiles) {
    const relativePath = path.relative(sourceDir, filePath);
    const isNested = relativePath.includes(path.sep);
    const isSavedPageAsset = relativePath.includes("_files");
    if ((isNested && !includeSavedPageFiles) || (isSavedPageAsset && !includeSavedPageFiles)) {
      continue;
    }

    const ext = path.extname(filePath).toLowerCase();
    const name = path.basename(filePath);
    const buffer = await fs.readFile(filePath);
    const mime = detectMime(buffer);
    if (!allowedExtensions.has(ext) && !mime) continue;
    if (name.includes("schema") || name.includes("logo") || name.includes("icon")) continue;

    const hash = crypto.createHash("sha1").update(buffer).digest("hex");
    if (seenHashes.has(hash)) continue;
    seenHashes.add(hash);

    const finalExt = allowedExtensions.has(ext) ? ext : extFromMime(mime);
    const slug = slugify(name || `image-${selected.length + 1}`);
    const originalTarget = path.join(outputDir, `${slug}${finalExt}`);
    await fs.writeFile(originalTarget, buffer);

    const webVariants = [];
    for (const width of widths) {
      const variantName = `${slug}-${width}.webp`;
      const variantPath = path.join(outputDir, variantName);
      await sharp(buffer).resize({ width, withoutEnlargement: true }).webp({ quality: 80 }).toFile(variantPath);
      webVariants.push(`/assets/images/${variantName}`);
    }

    selected.push({
      src: `/assets/images/${slug}${finalExt}`,
      alt: slug.replace(/-/g, " "),
      responsiveWebp: webVariants,
    });
  }

  await fs.writeFile(manifestPath, JSON.stringify(selected, null, 2));
  console.log(
    `Ingested ${selected.length} images. includeSavedPageFiles=${includeSavedPageFiles ? "1" : "0"}`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
