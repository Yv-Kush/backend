import mongoose from "mongoose";
import {DB_NAME}   from "../constants.js";

const connectDB =  async ()=> {
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
       console.log(`MongodDb connected : ${connectionInstance.connection.host}`)
       

    } catch (error) {
        console.error("Error in connectin Database to mongoose")
        process.exit(1)
    }}


    export default  connectDB