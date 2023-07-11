const express = require('express')
require('dotenv').config();
const router  = require('./Routers');
const cors = require('cors');

// const bodyParser =  require("body-parser");
let app = express();
app.use(express.json())
app.use(cors())

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(router);

let port = process.env.PORT || 4000;

app.listen(port, ()=>{
   console.log(`App is running at the port ${port}`);
});
