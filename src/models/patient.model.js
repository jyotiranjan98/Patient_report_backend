const mongoose = require("mongoose")

const patientSchema = new mongoose.Schema(
    {
        deviceID:{ type: String, required: false},
        capturedDateTime:{ type: Date,default:Date.now, required:true},
        bloodPressure:{ type: mongoose.Schema.Types.Mixed, default:{}},
        heartRate:{ type: mongoose.Schema.Types.Mixed, default:{}},
        spo2:{type: mongoose.Schema.Types.Mixed, default:{}},
        Pid:{type: String, required: true},
        Pname: {type: String, required: true},
        Age: {type: Number, required: true},
        Gender: {type: String, required: true},
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = new mongoose.model("patient", patientSchema)