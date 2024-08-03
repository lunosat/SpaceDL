import bot from "../app.js"
import i18n from "../config/i18n.js"
import textFormatter from "../helpers/textFormatter.js"

const handler = async (msg) => {
    try {
        const { id, first_name } = msg.from

        const text = textFormatter(i18n.__('welcome_message', first_name)) 
        bot.sendMessage(id, text, {
            parse_mode: 'markdownv2',
            reply_markup: {
                inline_keyboard: [[
                        {
                            text: `📚 ` + i18n.__('buttons.help'),
                            callback_data: JSON.stringify({callback: "help", args: []})
                        }
                    ], [
                        {
                            text: `🌟 ` + i18n.__('buttons.donate'),
                            callback_data: JSON.stringify({callback: "welcome_donate", args: []})
                        }
                    ], [
                        {
                            text: `🌐 ` + i18n.__('buttons.language'),
                            callback_data: JSON.stringify({callback: "language", args: [10]})
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

handler.command = /\/start/
handler.usage = ''
handler.help = 'Iniciar bot'
handler.maintenence = false
handler.admin = false
handler.developer = false
handler.limit = false

export default handler