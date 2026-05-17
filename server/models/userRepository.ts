import User from "./userModel.js"
import Time from "./timeModel.js"

interface CreateUserDTO {
    nome: string
}

const create = async (newUser: CreateUserDTO) => {
    try {

        const result = await User.create(newUser)

        return result

    } catch (error) {

        if(error instanceof Error) {
            throw new Error(error.message)
        }

        throw new Error('Erro ao criar usuário');  
    }
}

const findAndAssociete = async (id: string, timeId: string) => {
    try {

       const time = await Time.findById(timeId)

       if(!time){

        throw new Error("Time não encontrado");
        
       }

       const result = await User.findByIdAndUpdate( 
        id, 
        {$addToSet: { time: time._id }},
        {new: true}
       ).populate(
        { path: 'time' }
    )
       if(!result){
        throw new Error("Erro ao encontrar e atualizar usuário");
       }

       return result
       
    } catch (error) {
        if(error instanceof Error) {
            throw new Error(error.message)
        }

        throw new Error('Erro ao associar usuário ao time');  
    }
}

export default {create, findAndAssociete}