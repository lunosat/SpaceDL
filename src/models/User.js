import { Schema, model } from "mongoose";

const userSchema = new Schema({
    tgId: {
        type: String,
        required: true,
        unique: true
    }, 
    language: {
        type: String,
        enums: ['pt-br', 'en', 'es'],
        default: 'pt-br'
    }
})

const User = model('User', userSchema)

export default User