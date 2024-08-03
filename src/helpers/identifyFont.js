import { URL } from 'url';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let fonts = fs.readFileSync(path.join(__dirname, '../config/fonts.json'));
fonts = JSON.parse(fonts);

const identifyFont = (urlString) => {
    try {
        const parsedUrl = new URL(urlString);
        const hostname = parsedUrl.hostname;

        for (const font in fonts) {
            if (fonts[font].validUrls.some(validUrl => hostname.includes(validUrl))) {
                return font // Capitalize the first letter
            }
        }

        return 'Unknown';
    } catch (error) {
        console.error('Invalid URL:', error);
        return null;
    }
};

export default identifyFont;
