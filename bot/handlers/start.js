/**
 * Created by ARK on 25.08.2018.
 */
const func = require('../functions');



module.exports = (bot, msg, match) => {
    "use strict";

    const chats = func.getChats();
    const chatId = msg.chat.id;

    if(chats.filter(c => c.id === chatId).length === 0){
        chats.push(msg.chat);
        func.setChats(chats);
    }

    let data = '';

    bot.sendMessage(chatId, `Добро пожаловать, ${msg.chat.username}!\n${data}`);
};
