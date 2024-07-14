
const path = require('path');
const inquirer = require('inquirer');
const QRCode = require('qrcode');


const generateQrCode = async (text) => {
    try {
        const qrCodeData = await QRCode.toFile(path.join(__dirname, 'Qr_codes', `${text}.png`), text);
        console.log('QR Code generated successfully!');
    } catch (err) {
        console.error('Failed to generate QR Code:', err);
    }
};

inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter the text to generate QR code:',
    },
])
    .then((answers) => {
        generateQrCode(answers.text);
    })

    .catch((error) => {
        console.error('Error:', error);
    });
