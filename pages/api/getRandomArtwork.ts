import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs/promises';
import path from 'path';

export interface ArtImageData {
    fileName: string,
    path: string,
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const directoryPath = path.join(process.cwd(), 'public', 'img', 'artwork');

  try {
    // Read the contents of the directory
    const files = await fs.readdir(directoryPath);

    // Filter out only image files
    const imageFiles = files.filter((file) => /\.(jpg|jpeg|png|gif|webp)$/i.test(file));

    // Check if there are any images
    if (imageFiles.length === 0) {
      throw new Error('No images found in the specified directory');
    }

    // Randomly select an image
    const randomIndex = Math.floor(Math.random() * imageFiles.length);
    const imgData = {
        fileName: imageFiles[randomIndex],
        path: path.join('/img/artwork', imageFiles[randomIndex])

    }
    res.status(200).json(imgData);
  } catch (error) {
    console.error('Error:', (error as Error).message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};