import express from "express"
import cors from "cors"

const app =express()
app.use(express.json());
app.use(cors());

const Patient = require("../models/patient.model")

app.post("/patient/r/diagnoisticReport")