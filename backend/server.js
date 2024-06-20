require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();

//routes
const stripe = require('./routes/stripe')
const services = require('./routes/services')
const upload = require('./routes/upload')

app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 3000


async function connect(){
    try{ 
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("connected to mongodb")
    } catch(error) {
        console.log(error)
    }
}

connect()

app.use('/upload', upload)
app.use('/stripe', stripe)
app.use('/services', services)
app.use('/serviceImages', express.static('upload/serviceImages'))
app.use('/gallery', express.static('upload/gallery'))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));