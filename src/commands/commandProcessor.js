import fs from 'fs'
import path from 'path'
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const commandProcessor = async (bot) => {
    try {
        const files = fs.readdirSync(path.join(__dirname, "./"))
        // console.log(files)

        for(let file of files){
            try {
                if(file.endsWith('.js') && file != 'commandProcessor.js'){
                    const commandModule = await import(path.join(__dirname, './', file))
                    const commandHandler = commandModule.default

                    if(commandHandler && commandHandler.command){
                        bot.onText(commandHandler.command, commandHandler)
                        console.log(`Module initialized: ${file}`)
                    } else {
                        console.log(`Module not initialized: ${file}`)
                    }
                }
            } catch (error) {
                console.log(error)
                console.log(`Error on initiate module: ${file}`)
            }
        }
    } catch (error) {
        console.log(error)
    }
}

export default commandProcessor
