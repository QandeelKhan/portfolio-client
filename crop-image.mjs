import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Simple image processing to detect and crop out the teal background
async function cropImage() {
    const inputPath = path.join(__dirname, 'public', 'images', 'portfolio', 'edoc21-mobile.png');
    
    console.log('Checking if sharp is available...');
    
    try {
        const sharp = (await import('sharp')).default;
        
        console.log('Processing image with sharp...');
        
        const image = sharp(inputPath);
        const metadata = await image.metadata();
        
        console.log(`Original dimensions: ${metadata.width}x${metadata.height}`);
        
        // Trim the teal edges by cropping a few pixels from all sides
        const cropAmount = 5; // pixels to crop from each edge
        
        await image
            .extract({
                left: cropAmount,
                top: cropAmount,
                width: metadata.width - (cropAmount * 2),
                height: metadata.height - (cropAmount * 2)
            })
            .toFile(inputPath.replace('.png', '-clean.png'));
        
        console.log('✅ Image cropped successfully to: edoc21-mobile-clean.png');
        
        // Replace the original
        fs.renameSync(inputPath.replace('.png', '-clean.png'), inputPath);
        console.log('✅ Original image replaced with cleaned version');
        
    } catch (error) {
        console.error('Error:', error.message);
        console.log('\nSharp not available. The white background in CSS should handle it.');
        console.log('If you want to crop manually, the image is at:');
        console.log(inputPath);
    }
}

cropImage();
