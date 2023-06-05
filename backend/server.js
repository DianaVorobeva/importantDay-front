const TelegramBot = require('node-telegram-bot-api');
const http = require('http');
const cors = require('cors');
http.use(cors())

require('dotenv').config();
const token = process.env.TOKEN || "токен бота узнаешь у botFathers"
const bot = new TelegramBot(token, {
  polling: true,
});



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




