import dotenv from "dotenv"

import connectDB from "./db/index.js"

connectDB()

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