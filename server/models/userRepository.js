import User from "./userModel.js";
import Time from "./timeModel.js"

const create = async (newUser) => {
    try {
        const result = await User.create(newUser)
        return result
    } catch (error) {
        throw new Error(error.message);     
    }
}

const findAndAssociete = async (id, timeId) => {
    try {
       const time = await Time.findById(timeId)
       if(!time){
        throw new Error("Time não encontrado");
       }
       const result = await User.findByIdAndUpdate(
        id,
        { $addToSet: { time: time._id }},
        { new: true }
       ).populate({ path: 'time'})
       if(!result){
        throw new Error("Erro ao encontrar e atualizar User");
       }
       return result
    } catch (error) {
        throw new Error(error.message);
    }
}

export default {create, findAndAssociete}