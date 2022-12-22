const express = require('express');
const connect = require('./configs/db')

const cors = require('cors')
const app = express();

app.use(express.json())
app.use(cors())

const patient = require('./controllers/patientRegister.controller')
app.use('/patientreport', patient)

app.listen(4200, async function(){
    try{
        await connect();
        console.log("listen on port 4200")
    }
    catch(error){
        console.log(error)
    }
})