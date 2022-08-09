import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import morgan from "morgan"
import router from "./routes/client.js"
//BD
mongoose.connect('mongodb://127.0.0.1:27017/rest-api', ()=>{
    console.log('Conected')
})

//App 
const app = express();

//Config
app.set('PORT',3000 || process.env.PORT)

//Midleware
app.use(morgan('dev'))
app.use(express.json())

//Router API-REST
app.use('/api/',router)

//On server
app.listen(app.get('PORT'),()=>{
    console.log('Server running on port: ' + app.get('PORT'))
})