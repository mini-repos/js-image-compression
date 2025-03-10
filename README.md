# Image Compression and Conversion to WebP

This script is designed to compress and convert JPEG images to the WebP format using the Node.js `sharp` package. The compressed images will replace the original ones in a specified directory.

## Prerequisites

- Node.js installed on your machine
- npm (Node Package Manager) installed
- ts-node (if you want to directly run the `.ts` file)

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

Replace 'your_directory_path' in `main.ts` with the actual path to the directory containing your `.jpeg` files. And make sure that you have `ts-node` installed globally.

Run the script:

  ```bash
  ts-node main.ts
  ```
This will compress each JPEG image, convert it to WebP, and replace the original file in the specified directory.

## Configuration
You can adjust the compression settings and other parameters in the index.ts file to suit your requirements.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
