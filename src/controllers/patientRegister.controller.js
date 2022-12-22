const express = require('express');
const Patient = require('../models/patient.model');

const router = express.Router();

router.get("", async (req, res) => {
    try {
        const PatientRegister = await Patient.find().lean().exec();
        return res.status(200).send(PatientRegister)
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
});
//to get the data
router.get('/:id',(req,res,next)=>{
    console.log(req.params.id);
    Patient.findById(req.params.id)
    .then(result => {
        res.status(200).json({
            patient:result
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error:err
        })
    })
})


router.post("", (req, res) => {
    const {deviceID,
        capturedDateTime,
        bloodPressure,
        heartRate,
        spo2,
        Pid,
        Pname,
        Age,
        Gender} = req.body;
    Patient.findOne({Pname: Pname},(err, patient)=>{
        if(patient){
            res.send({message:"Patient already exits"})
        }else{
            const patient = new Patient({
                deviceID,
                capturedDateTime,
                bloodPressure,
                heartRate,
                spo2,
                Pid,
                Pname,
                Age,
                Gender
            })
            patient.save((err)=>{
                if(err){
                    res.send(err)
                }
                else{
                    res.send({ message: "Successfully Added"})
                }
            })
        }
    })
})

module.exports = router;