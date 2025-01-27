const express = require('express');
const app = express();
const router = require('./routes/index');
require('dotenv').config();
const port = process.env.PORT || 4000
const cors = require('cors')
const mongoose = require('mongoose');

mongoose.connect(`${process.env.MONGOOSE_CONNECTION + process.env.MONGOOSE_DB}`)


app.use(express.json())
app.use(cors())
app.use(router)

const message = ($msg)=>{
    console.log($msg);  
}

app.listen(port, message(`Server is listening to port ${port}`))