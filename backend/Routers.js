const express = require('express');

const Controller = require('./Controller.js')

let router = express.Router();

    // router.get("/", Controller.getHomePage);
    router.post("/send-notification", Controller.sendMessage);
    // router.get("/telegram", Controller.getTelegramPage);


module.exports = router;
