import { Schema, model } from "mongoose";

const userSchema = new Schema({
    tgId: {
        type: String,
        required: true,
        unique: true
    }
})

const User = model('User', userSchema)

export default User