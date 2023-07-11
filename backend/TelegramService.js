const request = require ("request");

require("dotenv").config();

let sendNotification = (data) => {
    return new Promise((resolve, reject) => {
        try {
            let TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
            let TELEGRAM_GROUP_ID = process.env.TELEGRAM_GROUP_ID;

            let user = {
                chat_id: TELEGRAM_GROUP_ID,
                parse_mode: "HTML",
                text: `Имя: <b>${data.userName}</b>
Телефон: <b>${data.userTel}</b>
`
            };
      
            
            request({
                uri: `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
                method: "POST",
                json: user
            }, function(err, res, body) {
                if (!err) {
                    resolve("done!");
                    
                } else {
                    console.log(err);
                    reject(err);
                }
            });
        } catch (e) {
            reject(e);
        }
    });
};



module.exports = {
    sendNotification: sendNotification,
};
