const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Define base path
const basePath = path.dirname(__filename);

// Log the base path for debugging
console.log('Base Path:', basePath);

// Paths for the files
const titlePsdPath = path.join(basePath, './template-psds/title.psd');
const titleJsxPath = path.join(basePath, './template-scripts/title.js');
const carouselPsdPath = path.join(basePath, './template-psds/carousel.psd');
const carouselJsxPath = path.join(basePath, './template-scripts/carousel.js');

// Function to check if a file exists
const fileExists = (filePath) => fs.existsSync(filePath);

// Validate all required files
if (!fileExists(titlePsdPath)) {
    console.error(`File not found: ${titlePsdPath}`);
    process.exit(1);
}
if (!fileExists(titleJsxPath)) {
    console.error(`File not found: ${titleJsxPath}`);
    process.exit(1);
}
if (!fileExists(carouselPsdPath)) {
    console.error(`File not found: ${carouselPsdPath}`);
    process.exit(1);
}
if (!fileExists(carouselJsxPath)) {
    console.error(`File not found: ${carouselJsxPath}`);
    process.exit(1);
}

// Function to open a PSD file in Photoshop
const openFileInPhotoshop = (filePath, callback) => {
    console.log(`Opening file in Photoshop: ${filePath}`);
    exec(`open -a "Adobe Photoshop 2025" "${filePath}"`, (error) => {
        if (error) {
            console.error(`Error opening file: ${filePath}`);
            console.error(`exec error: ${error}`);
            process.exit(1);
        } else {
            callback();
        }
    });
};

// Function to run an ExtendScript in Photoshop
const runExtendScript = (scriptPath, callback) => {
    console.log(`Running ExtendScript: ${scriptPath}`);
    exec(`osascript -e 'tell app "Adobe Photoshop 2025" to do javascript file "${scriptPath}"'`, (error) => {
        if (error) {
            console.error(`Error running script: ${scriptPath}`);
            console.error(`exec error: ${error}`);
            process.exit(1);
        } else {
            callback();
        }
    });
};

// Workflow
openFileInPhotoshop(titlePsdPath, () => {
    setTimeout(() => {
        runExtendScript(titleJsxPath, () => {
            console.log('Title is ready!');
            openFileInPhotoshop(carouselPsdPath, () => {
                setTimeout(() => {
                    runExtendScript(carouselJsxPath, () => {
                        console.log('Carousel is ready!');
                    });
                }, 5000); // Wait for Photoshop to load the file
            });
        });
    }, 5000); // Wait for Photoshop to load the file
});
