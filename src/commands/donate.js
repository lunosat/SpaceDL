import bot from "../app.js"
import i18n from "../config/i18n.js"
import textFormatter from "../helpers/textFormatter.js"

const handler = async (msg) => {
    try {
        const { id, first_name } = msg.from

        let args = msg.text.split(' ')
        args.shift()

        if(args.length >= 1){
            const amount = parseInt(args[0])
            if(isNaN(amount)){
                await bot.sendMessage(id, textFormatter(i18n.__('donate.invalid_amount')), { parse_mode: 'markdownv2' })
                return
            }

            if(amount >= 100001){
                await bot.sendMessage(id, textFormatter(i18n.__('donate.somuch')), { parse_mode: 'markdownv2' })
                return
            }

            const labelPrice = [{
                label: i18n.__('donate.amount_byuser'),
                amount,
            }]
            await bot.sendInvoice(id, i18n.__('donate.title'), i18n.__('donate.description'), 'donate_amout_by_user', '', 'XTR', labelPrice)
            return
        }
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
    } catch (error) {
        console.log(error)
    }

    return
}

handler.command = /\/donate/
handler.usage = ''
handler.help = 'Doar'
handler.maintenence = false
handler.admin = false
handler.developer = false
handler.limit = false

export default handler