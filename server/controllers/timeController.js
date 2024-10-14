import mongoose from 'mongoose'
import timeRepository from "../models/timeRepository.js";

const findAll = async (req, res) => {
    try{
        const times = await timeRepository.findAll({})
        return res.status(200).json({ count: times.length, data: times })
    }catch(error){
        console.log(error)
        return res.status(500).send({ message: error.message })
    }
} 

const findById = async (req, res) => {
    try{
        const { id } = req.params
        const time = await timeRepository.findById(id)
        if(!time){
            return res.status(400).json({message: 'Time não foi encontrado, preencha um id válido!'})
        }
        return res.status(200).json({message: 'Na db!', data: time})
    }catch(error){
        console.log(error)
        return res.status(500).send({ message: error.message })
    }
}

const create = async (req, res) => {
    try{
        const { nome, qtdTorcedor } = req.body
        if( !nome || !qtdTorcedor ){
            return res.status(400).send({message: 'Preencha todos os campos'})
        }
        const newTime = { nome, qtdTorcedor }
        const time = await timeRepository.create(newTime)
        return res.status(201).json({message: 'Criado com sucesso', data: time})
    }catch(error){
        console.log(error)
        return res.status(500).send({ message: error.message })
    }
}

const update = async (req, res) => {
    try{
        const { id } = req.params
        const isIdValid = mongoose.Types.ObjectId.isValid(id)
        const { nome, qtdTorcedor } = req.body
        if((!isIdValid) || !nome && !qtdTorcedor ){
            return res.status(400).send({message: 'ID inválido ou preencha algum campo!'})
        }
        const updateTime = ({ nome, qtdTorcedor })
        const time = await timeRepository.update({ _id: id }, updateTime)
        if(!time){
            return res.status(400).send({message: 'Erro ao atualizar!'})
        }
        return res.status(200).json({message: 'Atualizado!', data: updateTime})
    }catch(error){
        console.log(error)
        return res.status(500).send({ message: error.message })
    }
}

const findAndDelete = async (req, res) => {
    try {
        const { id } = req.params
        const isIdValid = mongoose.Types.ObjectId.isValid(id)
        if(!isIdValid){
            return res.status(400).send({message: 'ID inválido'})
        }
        const time = await timeRepository.findAndDelete(id)
        if(!time){
            return res.status(400).send({message: 'Erro ao deletar, preencha um id válido'})
        }
        return res.status(200).json({message: 'Deletado!', data: time})
    }catch(error){
        console.log(error)
        return res.status(500).send({ message: error.message})
    }
}

export default {findAll, findById, create, update, findAndDelete}