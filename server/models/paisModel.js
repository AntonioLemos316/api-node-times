import mongoose from "mongoose";

const paisSchema = mongoose.Schema({
    pais: { 
        type: String
    },
    lingua: {
        type: String
    }
})

const Pais = mongoose.model('Pais', paisSchema)

export default Pais