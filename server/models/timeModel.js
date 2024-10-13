import mongoose from "mongoose";

const timeSchema = mongoose.Schema({
    nome: { 
        type: String 
    },
    qtdTorcedor: { 
        type: Number 
    },
})

const Time = mongoose.model('Time', timeSchema)

export default Time