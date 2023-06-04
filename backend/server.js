const TelegramBot = require('node-telegram-bot-api');
const http = require('http');
const express = require('express');
const cors = require('cors');

require('dotenv').config();
const token = process.env.TOKEN || "токен бота узнаешь у botFathers"
const bot = new TelegramBot(token, {
  polling: true,
});

const app = express();

app.use(express.json());
app.use(cors());

const chatId = process.env.CHATID || "id чата";
//Узнать id чата bot.on('message', function (msg){console.log(msg.from.id)})

http.createServer( (req,res)=>{

if( req.url === "/message/"){

    res.writeHead(200, {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",//Внимание к данному заголовку
        "Date": new Date()
    });

    let formData = '';
            
    req.on('data', function(chunk) {
      formData += chunk.toString();
    });

    req.on('end', function() {
      let data = JSON.parse(formData);
      let str = "\nИмя: " + data.user+"\nНомер: " + data.tel;
      bot.sendMessage(chat_id, str).//бот отправляет сообщение с инфой из формы 
        then(data=>{//Здесь результат успешной отправки сообщения 
          console.log(data)
        }).
        catch(err=>{//Здесь результат ошибки отправки сообщения ботом   
          console.log(err)
        });
    });

    res.end("<div id='request'>Ваша заявка оформлена.</div>");
}else{
    res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    res.end(`<h1>Ок</h1>`)
}

}).listen(3000,()=>{console.log("Server is running at Port 3000")})








// Done! Congratulations on your new bot. You will find it at t.me/ImportantDay78_bot. You can now add a description, about section and profile picture for your bot, see /help for a list of commands. By the way, when you've finished creating your cool bot, ping our Bot Support if you want a better username for it. Just make sure the bot is fully operational before you do this.

// Use this token to access the HTTP API:
// 5668510786:AAHighnzpFZ7audlhdI06qpG1W5kxOioGsc
// Keep your token secure and store it safely, it can be used by anyone to control your bot.

// For a description of the Bot API, see this page: https://core.telegram.org/bots/api

// Your user ID: 875245613
// Current chat ID: 875245613
// Forwarded from chat: -1001941601485

