# Favicon Generation Instructions

To complete the favicon setup for the website, you need to create the following favicon files from your logo:

## Required Files

1. **favicon.ico** (16x16, 32x32, 48x48 in one file)
2. **apple-touch-icon.png** (180x180)
3. **favicon-16x16.png** (16x16)
4. **favicon-32x32.png** (32x32)
5. **favicon-192x192.png** (192x192)
6. **favicon-512x512.png** (512x512)

## Steps to Generate

### Option 1: Online Favicon Generator
1. Go to https://favicon.io/favicon-converter/
2. Upload your logo file (`/public/logos/logo.png`)
3. Download the generated favicon package
4. Extract and place files in `/public/` directory

### Option 2: Manual Creation
1. Open your logo in an image editor (Photoshop, GIMP, etc.)
2. Resize to each required dimension
3. Save as PNG format (except favicon.ico)
4. For favicon.ico, use an ICO converter

### Option 3: Command Line (if you have ImageMagick)
```bash
# From your logo.png, generate all sizes
convert logo.png -resize 16x16 favicon-16x16.png
convert logo.png -resize 32x32 favicon-32x32.png
convert logo.png -resize 180x180 apple-touch-icon.png
convert logo.png -resize 192x192 favicon-192x192.png
convert logo.png -resize 512x512 favicon-512x512.png

# Create favicon.ico (multi-size)
convert logo.png -resize 16x16 favicon-16.png
convert logo.png -resize 32x32 favicon-32.png
convert logo.png -resize 48x48 favicon-48.png
convert favicon-16.png favicon-32.png favicon-48.png favicon.ico
```

## File Placement
Place all generated files in the `/public/` directory:
```
public/
├── favicon.ico
├── apple-touch-icon.png
├── favicon-16x16.png
├── favicon-32x32.png
├── favicon-192x192.png
└── favicon-512x512.png
```

## Verification
After adding the files:
1. Clear browser cache
2. Visit your website
3. Check if favicon appears in browser tab
4. Test on mobile devices for apple-touch-icon

The website is already configured to use these files through the layout.tsx metadata settings. 