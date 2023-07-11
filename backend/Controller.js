const telegramService = require('./TelegramService')

// let handlePushTeleNotification = async (req, res) => {
//     //send noti to telegram
//     let user = {
//         userName: req.body.userName,
//         userTel: req.body.userTel,
//     };
//     await telegramService.sendNotification(user);
//     //then redirect to the telegram page
//     return res.redirect("/telegram");
// };


//  let sendMessage = async (req,res) => {
//     console.log(req.body.userName)
//     let data = {
//         userName: req.body.userName,
//         userTel: req.body.userTel,
//     };
//     res.send(data)
//     // await telegramService.sendNotification(data);
//     //then redirect to the telegram page
//     // return res.redirect("/telegram");
// }
// module.exports = {
//     sendMessage: sendMessage
// };

// let getHomePage = (req, res) => {
//     return res.render("../src/Form/Telegtam.js");
// };

let sendMessage = async (req,res) => {
    console.log(req.body)
    let data = {
                userName: req.body.userData.userName,
                userTel: req.body.userData.userTel,
            };
        res.send(console.log(data))
        
           
        await telegramService.sendNotification(data);
        
     
}
// let getTelegramPage = (req, res) => {
//     return res.render("Telegram.js");
// };


module.exports = {
    // getHomePage: getHomePage,
    sendMessage: sendMessage,
    // getTelegramPage: getTelegramPage
};