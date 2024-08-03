import { I18n } from "i18n";
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const i18n = new I18n({
    locales: ['en', 'pt-br'],
    directory: path.join(__dirname, '../locales'),
    defaultLocale: 'pt-br',
    objectNotation: true
})

export default i18n