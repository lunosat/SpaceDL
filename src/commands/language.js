import bot from "../app.js"
import i18n from "../config/i18n.js"
import textFormatter from "../helpers/textFormatter.js"

const handler = async (msg) => {
    try {
        const { id, first_name } = msg.from

        const text = textFormatter(i18n.__('language.message')) 
        bot.sendMessage(id, text, {
            parse_mode: 'markdownv2',
            reply_markup: {
                inline_keyboard: [[
                        {
                            text: i18n.__('language.english'),
                            callback_data: JSON.stringify({callback: "language_set", args: ['en']})
                        }
                    ], [
                        {
                            text: i18n.__('language.portuguese'),
                            callback_data: JSON.stringify({callback: "language_set", args: ['pt-br']})
                        }
                    ], [
                        {
                            text: i18n.__('language.spanish'),
                            callback_data: JSON.stringify({callback: "language_set", args: ['es']})
                        }
                    ]
                ]
            }
        })
    } catch (error) {
        console.log(error)
    }

    return
}

handler.command = /\/language/
handler.usage = ''
handler.help = 'Iniciar bot'
handler.maintenence = false
handler.admin = false
handler.developer = false
handler.limit = false

export default handler