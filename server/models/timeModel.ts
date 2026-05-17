import mongoose from "mongoose";

const timeSchema = new mongoose.Schema({
    nome: { 
        type: String 
    },
    qtdTorcedor: { 
        type: Number 
    },
})

const Time = mongoose.model('Time', timeSchema)

export default Time