import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

export async function compressAndConvertImages(directoryPath) {
    try {
        // Read all files in the directory with a .jpeg extension
        const jpegFiles = fs.readdirSync(directoryPath).filter(file => file.endsWith('.jpeg'));

        // Process each image
        const compressedImagesPromises = jpegFiles.map(async (fileName) => {
            const filePath = path.join(directoryPath, fileName);

            // Read the image file
            const imgBuffer = fs.readFileSync(filePath);
            console.log('Processing image:', fileName);

            // Compress the image using sharp
            const compressedBuffer = await sharp(imgBuffer)
                .resize({ width: 1280 })
                .jpeg({ quality: 70 })
                .toBuffer();

            // Convert the compressed image to .webp format
            const webpFilePath = path.join(directoryPath, `${path.parse(fileName).name}.webp`);
            await sharp(compressedBuffer)
                .resize({ width: 1080 })
                .webp({ quality: 70 })
                .toFile(webpFilePath);

            // Remove the original .jpeg file
            fs.unlinkSync(filePath);
        });

        await Promise.all(compressedImagesPromises);

        console.log('Compression and conversion to .webp completed successfully!');
    } catch (error) {
        console.error('Error processing the images:', error);
    }
}

// Example usage: Replace './images' with the actual directory path containing the .jpeg files
const directoryPath = './images';
compressAndConvertImages(directoryPath);
