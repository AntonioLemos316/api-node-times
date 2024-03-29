import express from 'express'
import conn from './database/mongodb.js'
import Time from './model/timeModel.js'
import mongoose from 'mongoose'

const app = express()
const PORT = 3000

app.use(express.json())

app.get('/teste', (req, res) => {
    res.send('Olá Mundo!, no endpoint /teste com o metodo GET')
})

app.get('/times', async (req, res) => {
    try{
        const times = await Time.find({})
        return res.status(200).json({ count: times.length, data: times })

    }catch(error){
        console.log(error)
        return res.status(500).send({ message: error.message })
    }
})

app.get('/times/:id', async (req, res) => {
    try{
        const { id } = req.params
        const time = await Time.findById(id)
        return res.status(200).json(time)

    }catch(error){
        console.log(error)
        return res.status(500).send({ message: error.message })
    }
})

app.post('/time', async (req, res) => {
    try{
        const { nome, nacionalidade, estadio, capacidadeEstadio, isCenturyOld } = req.body
        if( !nome || !nacionalidade || !estadio || !capacidadeEstadio || !isCenturyOld ){
            return res.status(400).send({message: 'Preencha todos os campos'})
        }
        const newTime = { nome, nacionalidade, estadio, capacidadeEstadio, isCenturyOld }
        const time = await Time.create(newTime)
        return res.status(201).send(time)

    }catch(error){
        console.log(error)
        return res.status(500).send({ message: error.message })
    }
})

app.patch('/time/:id', async (req, res) => {
    try{
        const { id } = req.params
        const notIdValid = (isNotValid) => !mongoose.Types.ObjectId.isValid(isNotValid)
        const { nome, nacionalidade, estadio, capacidadeEstadio, isCenturyOld } = req.body
        if((notIdValid(id)) || !nome && !nacionalidade && !estadio && !capacidadeEstadio && !isCenturyOld){
            return res.status(400).send({message: 'Preencha um id válido e pelo menos um campo'})
        }
        const updateTime = ({ nome, nacionalidade, estadio, capacidadeEstadio, isCenturyOld })
        const time = await Time.findByIdAndUpdate({ _id: id }, updateTime)
        return res.status(200).json({message: 'Atualizado com sucesso', data: time})

    }catch(error){
        console.log(error)
        return res.status(500).send({ message: error.message })
    }
})

// Middleware caso não passe uma rota válida
app.use((req, res) => {
    res.status(404).send('404 - Not Found');
});

conn

app.listen(PORT, () => console.log(`Server rodando em http://localhost:${PORT}`))