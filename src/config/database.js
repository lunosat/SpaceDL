import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const dbUri = process.env.DB_URI

const connectDb = async () => {
    try {
        console.log('Database connecting...')
        await mongoose.connect(dbUri)
        console.log('Database connected.')
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

export default connectDb