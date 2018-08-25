/**
 * Created by ARK on 25.08.2018.
 */

module.exports = (bot, msg, match) => {
    "use strict";

    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
};
