import Time from './timeModel.js';

const findAll = async () => {
    try {
        const result = await Time.find({})

        return result

    } catch (error) {

        if(error instanceof Error) {
            throw new Error(error.message)
        }

        throw new Error('Erro ao buscar times');
    }
}

const findById = async (id: string) => {
    try {
        const result = await Time.findById(id)

        return result

    } catch (error) {

         if(error instanceof Error) {
            throw new Error(error.message)
        }

        throw new Error('Erro ao buscar times');     
    }
}

const create = async (newTime: {
    nome: string, 
    qtdTorcedor: number
}) => {

    try {

        const result = await Time.create(newTime)

        return result

    } catch (error) {

         if(error instanceof Error) {
            throw new Error(error.message)
        }

        throw new Error('Erro ao criar time');
    }
}

const update = async (
    id: string, 
    updateTime: {
        nome?: string, 
        qtdTorcedor?: number
    }
) => {

    try {

        const result = await Time.findByIdAndUpdate(
            id, 
            updateTime,
            { new: true }
        )

        return result 

    } catch (error) {
        
         if(error instanceof Error) {
            throw new Error(error.message)
        }

        throw new Error('Erro ao atualizar times');
    }
}

const findAndDelete = async (id: string) => {

    try {

        const result = await Time.findByIdAndDelete(id)

        return result

    } catch (error) {

         if(error instanceof Error) {
            throw new Error(error.message)
        }

        throw new Error('Erro ao deletar times');
    }
}

export default {create, findAll, findById, update, findAndDelete}

