const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes/routes');
 
const app = express();
app.use(express.json());
app.use(cors());
app.use('/', router)

const PORT = process.env.PORT || 8080;
const URI = "mongodb+srv://Jagadeesh-Vadlamuri:ZnaOthYdp2mxilyR@cluster0.bo5kt.mongodb.net/Markdown-Editor?retryWrites=true&w=majority";

mongoose.connect(URI).then(() => {
    try{
        app.listen(PORT, () => {
            console.log("Connected to Mongo on"+" "+PORT)
        })
    } catch(e){
        console.log(e)
    }
})