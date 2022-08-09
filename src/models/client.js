import mongoose from "mongoose";

const clientSchema = mongoose.Schema({
    nombre: String,
    apellido: String,
    email: String
})

export default mongoose.model('client',clientSchema)