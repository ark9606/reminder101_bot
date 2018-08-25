/**
 * Created by ARK on 24.08.2018.
 */

const TelegramBot = require('node-telegram-bot-api');
const token = require('./../token');

const routes = require('./routes');
const start = require('./handlers/start');
const echo = require('./handlers/echo');

const bot = new TelegramBot(token, {polling: true});

bot.onText(routes.START, (msg, match) => start(bot, msg, match));

bot.onText(routes.ECHO, (msg, match) => echo(bot, msg, match));




// bot.on('message', (msg) => {
//     const chatId = msg.chat.id;
//
//     // send a message to the chat acknowledging receipt of their message
//     bot.sendMessage(chatId, 'Received your message');
// });

module.exports = bot;

