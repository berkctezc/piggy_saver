const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true
});

const connection = mongoose.connection;
connection.once('open',()=> {
    console.log('mongodb baglantisi gerceklesti');
})

app.listen(port,()=>{
    console.log('Server',port,'portunda calisiyor');    
}) 