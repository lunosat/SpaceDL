import bot from "../app.js"
import i18n from "../config/i18n.js"
import textFormatter from "../helpers/textFormatter.js"

const callbackQuery = async (evt) => {
    try {
        const { id, first_name } = evt.from

        const { callback, args } = JSON.parse(evt.data)

        if(callback === 'welcome_donate'){
            const text = textFormatter(i18n.__('donate.message', first_name)) 
            bot.sendMessage(id, text, {
                parse_mode: 'markdownv2',
                reply_markup: {
                    inline_keyboard: [[
                            {
                                text: '⭐ 10',
                                callback_data: JSON.stringify({callback: "donate", args: [10]})
                            }
                        ], [
                            {
                                text: '⭐ 50',
                                callback_data: JSON.stringify({callback: "donate", args: [50]})
                            }
                        ], [
                            {
                                text: '⭐ 100',
                                callback_data: JSON.stringify({callback: "donate", args: [100]})
                            }
                        ], [
                            {
                                text: '⭐ 500',
                                callback_data: JSON.stringify({callback: "donate", args: [500]})
                            }
                        ], [
                            {
                                text: '⭐ 1000',
                                callback_data: JSON.stringify({callback: "donate", args: [1000]})
                            }
                        ]
                    ]
                }
            })

            await bot.answerCallbackQuery(evt.id)
        }

        if(callback === 'donate'){
            const amount = args[0]
            const labelPrice = [{
                label: i18n.__('donate.amount_byuser'),
                amount,
            }]
            await bot.sendInvoice(id, i18n.__('donate.title'), i18n.__('donate.description'), 'donate_amout_by_user', '', 'XTR', labelPrice)
            await bot.answerCallbackQuery(evt.id)
            return
        }

        if(callback === 'help'){
            await bot.sendMessage(id, 'https://telegra.ph/Eu-estou-no-fundo-08-03')
        }
    } catch (error) {
        console.log(error)
    }
}

export default callbackQuery