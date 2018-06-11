// ===========/ GLOBAL VARIABLES /=========== //

const TelegramBot = require('node-telegram-bot-api')
const config = require('./config')
const helper = require('./helper')

// ===========/ BOT LOG /=========== //

helper.logStart()

// ===========/ BOT TOKEN /=========== //

const bot = new TelegramBot(config.TOKEN, {
    polling: true
})

// ===========/ API METHODS /=========== //

bot.on('message', msg => {
    console.log('Working', msg.from.first_name)
    bot.sendPhoto('@yarazrabotchik', 'pic01.jpg', {
        caption: `
		[udemy] Object-oriented Programming in JavaScript
		`,
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: 'Оригинал 🗂',
                        url: 'https://www.udemy.com/javascript-object-oriented-programming/'
                    },
                    {
                        text: "Скачать 📁",
                        url: 'https://yadi.sk/d/9Ur7gzel3WZKp4'
                    }
                ]
            ]
        }
    })
})

