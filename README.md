# Image Compression and Conversion to WebP

This script is designed to compress and convert JPEG images to the WebP format using the Node.js `sharp` package. The compressed images will replace the original ones in a specified directory.

## Prerequisites

- Node.js installed on your machine
- npm (Node Package Manager) installed

## Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/mini-repos/ts-image-compression.git
    ```

2. Navigate to the project directory:

    ```bash
    cd image-compression-webp-conversion
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

Replace 'your_directory_path' in `index.ts` with the actual path to the directory containing your `.jpeg` files.

Run the script:

  ```bash
  npm run compress-images
  ```
This will compress each JPEG image, convert it to WebP, and replace the original file in the specified directory.

## Configuration
You can adjust the compression settings and other parameters in the index.ts file to suit your requirements.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
