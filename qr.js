// index.js

const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const QRCode = require('qrcode');

// Function to start the application
async function start() {
    try {
        // Ask user for input data
        const userInput = await inquirer.prompt([
            {
                name: 'data',
                message: 'Enter data to generate QR Code:',
                validate: function(value) {
                    if (value.trim().length > 0) {
                        return true;
                    }
                    return 'Please enter valid data.';
                }
            }
        ]);

        return userInput.data;

        // Generate QR Code
        const qrImageBuffer = await QRCode.toBuffer(data, {
            errorCorrectionLevel: 'H', // High error correction level
            type: 'png', // Output as PNG
            margin: 1, // Set margin width (default is 4)
            quality: 1 // Set quality factor (only for jpeg format)
        });

        // Save QR Code image to file
        const fileName = `${data}.png`; // Use user input as file name
        const filePath = path.join(__dirname, fileName);
        fs.writeFileSync(filePath, qrImageBuffer);

        console.log(`QR Code generated and saved as ${fileName} successfully!`);
    } catch (error) {
        console.error('Error generating QR Code:', error);
    }
}

// Start the application
start();