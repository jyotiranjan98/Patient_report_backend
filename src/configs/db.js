const mongoose = require("mongoose");
module.exports = () => {
    return mongoose.connect("mongodb+srv://jyoti98:str1234@cluster0.6api4ft.mongodb.net/?retryWrites=true&w=majority")
}