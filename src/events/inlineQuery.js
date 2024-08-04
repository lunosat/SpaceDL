import bot from '../app.js'
import downloadProcessor from '../downloaders/downloaderProcessor.js'
import isValidUrl from '../helpers/isValidUrl.js'
import User from '../models/User.js'

const inlineQuery = async (evt) => {
    try {
        const { id, query } = evt

        // console.log(evt)

        const user = await User.findOne({ tgId: id })
        if(!user){
            await User.create({ tgId: id })

            console.log(`New user with id ${id} registered.`)
        }

        console.log(isValidUrl(query))

        if(!isValidUrl(query)){
            const result = [{
                type: 'article',
                id: '1',
                title: 'Link inválido, verifique e tente novamente.',
                input_message_content: {
                    message_text: `O link indicado é invalido, confira em nosso bot os sites e redes sociais suportadas no momento.`
                }
            }]

            return await bot.answerInlineQuery(id, result)
        }

        const results = await downloadProcessor(query, 'inline')

        if(results.length >= 1){
            await bot.answerInlineQuery(id, results)
        }

    } catch (error) {
        console.log(error)
    }
}

export default inlineQuery