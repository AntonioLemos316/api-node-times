import userRepository from "../models/userRepository.js";

const create = async (req, res) => {
    const {nome} = req.body
    if(!nome){
        return res.status(400).send({message: 'Preencha o campo'})
    }
    const newUser = {nome}
    const user = await userRepository.create(newUser)
    if(!user){
        return res.status(400).send({message: 'Erro ao criar usuario'})
    }
    return res.status(201).send({message: 'Usuario criado!', data: user})    
}

const findAndAssociete = async (req, res) => {
    const { id } = req.params
    const { timeId } = req.body
    const timeAssociado = await userRepository.findAndAssociete(id, timeId)
    if(!timeAssociado){
        return res.status(400).send({message: 'Erro ao associar um time'})
    }
    return res.status(201).send({message: 'Time associado', data: timeAssociado})
}

export default {create, findAndAssociete}