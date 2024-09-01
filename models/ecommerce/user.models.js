import mongoose from "mongoose";

new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowrcase: true
    },
}, {timestamps: true})

export const User = mongoose.model("User", userSchema)