import isValidUrl from "../helpers/isValidUrl.js"
import bot from '../app.js'
import downloadProcessor from "../downloaders/downloaderProcessor.js"

const messageEvent = async (evt) => {
    try {
        const { id } = evt.from
        const { text } = evt

        // console.log(evt)

        if(text.startsWith('/')) return

        await bot.sendMessage(id, `Explorando os cosmos... um momento`)

        if(!isValidUrl(text)){
            const msg = `O link fornecido é inválido! Verifique seu link e tente novamente.`
            return bot.sendMessage(id, msg)
        }

        const results = await downloadProcessor(text, 'direct')

        // console.log(results)

        for(let result of results){
            await bot.sendVideo(id, result)
        }
    } catch (error) {
        console.error(error)
    }
}

export default messageEvent