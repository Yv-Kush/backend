import dotenv from "dotenv"
import app from './app.js'
import connectDB from "./db/index.js"

connectDB()
.then( ()=> {
    app.listen(process.env.PORT || 8000, ()=> {
        console.log("server is listing on port ", process.env.PORT)
    })
})
.catch( (error)=> {
    console.log("error on connecting Database", error)
})



dotenv.config({
    path: "./env"
})












/*
import express from 'express'
 const app = express();

;( async ()=> {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("error:", error)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(` app listening on port ${process.env.PORT}`)
          })

    } catch (error) {
        console.error("Error in connectin Database to mongoose")
        throw error
    }
})()
*/