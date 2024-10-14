import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    nome: { 
        type: String,
        required: true, 
    },
    time: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Time',
        required: false,
        default: []
    }]
})

const User = mongoose.model('User', userSchema)

export default User