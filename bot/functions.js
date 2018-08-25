/**
 * Created by ARK on 25.08.2018.
 */
const func = {};
const fs = require('fs');

func.getChats = () => {
    return require('./store/chats.json');
};

func.setChats = (chats) => {
    fs.writeFile('bot/store/chats.json', JSON.stringify(chats), err =>{ if(err) console.log(err) });
};

func.getAdmin = () => {
    const chats = require('./store/chats.json');
    return chats.filter( c => c.isAdmin)[0];
};

func.isAdmin = (chatId) => {
    const chats = require('./store/chats.json');
    return chats.filter( c => c.id === chatId && c.isAdmin === true).length > 0;
};

module.exports = func;
