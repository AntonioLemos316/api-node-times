import mongoose from 'mongoose'

import type { Request, Response } from 'express';

import timeRepository from "../models/timeRepository.js";

const findAll = async (req: Request, res: Response): Promise<Response> => {
    try{
        const times = await timeRepository.findAll()

        return res.status(200).json({ 
            count: times.length, 
            data: times 
        })
    }catch(error){
        console.log(error)

        return res.status(500).send({ 
            message: 'Erro interno do servidor'
        })
    }
} 

const findById = async (req: Request, res: Response): Promise<Response> => {
    try{
        const { id } = req.params

        if(!id || Array.isArray(id)) {
            return res.status(400).send({
                message: 'ID inválido'
            })
        }

        const time = await timeRepository.findById(id)

        if(!time){
            return res.status(400).json({
                message: 'Time não foi encontrado, preencha um id válido!'
            })
        }

        return res.status(200).json({
            message: 'Na db!', 
            data: time
        })
    }catch(error){
        console.log(error)

        return res.status(500).send({ 
            message: 'Erro interno do servidor' 
        })
    }
}

const create = async (req: Request, res: Response): Promise<Response> => {
    try{
        const { nome, qtdTorcedor } = req.body

        if( !nome || !qtdTorcedor ){
            return res.status(400).send({
                message: 'Preencha todos os campos'
            })
        }

        const newTime = { 
            nome, 
            qtdTorcedor 
        }

        const time = await timeRepository.create(newTime)
        
        return res.status(201).json({
            message: 'Criado com sucesso', 
            data: time
        })
    }catch(error){
        console.log(error)

        return res.status(500).send({ 
            message: 'Erro interno do servidor' 
        })
    }
}

const update = async (req: Request, res: Response): Promise<Response> => {
    try{
        const { id } = req.params

        if(!id || Array.isArray(id)) {
            return res.status(400).send({
                message: 'ID inválido'
            })
        }

        const isIdValid = mongoose.Types.ObjectId.isValid(id)

        const { nome, qtdTorcedor } = req.body

        if((!isIdValid) || !nome && !qtdTorcedor ){
            return res.status(400).send({
                message: 'ID inválido ou preencha algum campo!'
            })
        }

        const updateTime = ({ 
            nome, 
            qtdTorcedor 
        })

        const time = await timeRepository.update(
            id, 
            updateTime
        )

        if(!time){
            return res.status(400).send({
                message: 'Erro ao atualizar!'
            })
        }

        return res.status(200).json({
            message: 'Atualizado!', 
            data: updateTime
        })
    }catch(error){
        console.log(error)

        return res.status(500).send({ 
            message: 'Erro interno de servidor'
        })
    }
}

const findAndDelete = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params

        if(!id || Array.isArray(id)) {
            return res.status(400).send({
                message: 'ID inválido'
            })
        }

        const isIdValid = mongoose.Types.ObjectId.isValid(id)

        if(!isIdValid){
            return res.status(400).send({
                message: 'ID inválido'
            })
        }

        const time = await timeRepository.findAndDelete(id)

        if(!time){
            return res.status(400).send({
                message: 'Erro ao deletar, preencha um id válido'
            })
        }

        return res.status(200).json({
            message: 'Deletado!', 
            data: time
        })
    }catch(error){
        console.log(error)

        return res.status(500).send({ 
            message: 'Erro interno do servidor'
        })
    }
}

export default {findAll, findById, create, update, findAndDelete}