import TelegramBot from 'node-telegram-bot-api'

import connectDb from './config/database.js'

/* Events */

import messageEvent from './events/message.js'
import inlineQueryEvent from './events/inlineQuery.js'
import commandProcessor from './commands/commandProcessor.js'
import callbackQuery from './events/callbackQuery.js'

const token = process.env.TG_TOKEN

const bot = new TelegramBot(token, { polling: true })

const initializeBot = async () => {
    await connectDb()
    
    await commandProcessor(bot)
    
    bot.on('message', messageEvent)
    bot.on('inline_query', inlineQueryEvent)
    bot.on('callback_query', callbackQuery)
    
    console.log('Bot started')
}

initializeBot()

export default bot
