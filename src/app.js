import TelegramBot from 'node-telegram-bot-api'

import connectDb from './config/database.js'

/* Events */

import messageEvent from './events/message.js'
import inlineQueryEvent from './events/inlineQuery.js'
import commandProcessor from './commands/commandProcessor.js'

let bot

(async () => {
    await connectDb()
    
    const token = process.env.TG_TOKEN
    bot = new TelegramBot(token, { polling: true })
    
    await commandProcessor(bot)
    
    bot.on('message', messageEvent)
    bot.on('inline_query', inlineQueryEvent)
    console.log('Bot started')
})()

export default bot
