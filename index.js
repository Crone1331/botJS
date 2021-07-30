const TelegramApi = require('node-telegram-bot-api'); //api teleg
const token = '1933808380:AAGYmpFiTZ0MVKNBMVmceWe_09UAK6UdqXU'; //token bot
const bot = new TelegramApi(token,{polling:true});

const chats={

};
const options ={
    reply_markup:JSON.stringify({
        inline_keyboard:[
            [{text:'Текст кнопки', callback_data:'1'},{text:'Текст кнопки', callback_data:'1'},{text:'Текст кнопки', callback_data:'1'}],
            [{text:'Текст кнопки', callback_data:'2'}],
            [{text:'Текст кнопки', callback_data:'3'}],
            [{text:'Текст кнопки', callback_data:'4'}],
        ]
    })
}

bot.setMyCommands([
    {command: '/start', description:'Начальное приветствие'},
    {command: '/info', description:'Информация'},
    {command: '/info', description:'Показ кнопок'},
]);

//event message
const start = ()=>{
bot.on('message', async msg=>{
    const text = msg.text;
    const chatId = msg.chat.id;
    

    if(text === '/start'){
       return bot.sendMessage(chatId, 'Добро пожаловать, я телеграм-бот ютубера Klash');
    }
    if(text === '/game'){
        //показывает кнопки
        return bot.sendMessage(chatId, 'Текст над кнопками', options);
    }
    return bot.sendMessage(chatId, 'Я тебя не понимаю, попробуй еще раз!)');
});

//нажатие клавиш
bot.on('callback_query', msg =>{
    const data = msg.data; //данные нажатой кнопки
    const chatId = msg.message.chat.id;
    bot.sendMessage(chatId, `ты нажал кнопку ${data}`);
});
}


start();