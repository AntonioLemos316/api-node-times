import mongoose from "mongoose";

const timeSchema = mongoose.Schema({
    nome: { 
        type: String 
    },
    nacionalidade: { 
        type: String
    },
    estadio: { 
        type: String 
    },
    capacidadeEstadio: { 
        type: Number 
    },
    isCenturyOld: { 
        type: Boolean 
    }
})

const Time = mongoose.model('Time', timeSchema)

export default Time