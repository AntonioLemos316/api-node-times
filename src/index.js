import express from 'express'
import conn from './database/mongodb.js'
import Time from './model/timeModel.js'

const app = express()
const PORT = 3000

app.use(express.json())

app.get('/teste', (req, res) => {
    res.send('Olá Mundo!, no endpoint /teste com o metodo GET')
})

app.post('/time', async (req, res) => {
    const {nome, nacionalidade, estadio, capacidadeEstadio, isCenturyOld} = req.body
    try{
        if(!nome || !nacionalidade || !estadio || !capacidadeEstadio || !isCenturyOld){
            return res.status(400).send({message: 'Preencha todos os campos'})
        }
        const newTime = { nome, nacionalidade, estadio, capacidadeEstadio, isCenturyOld }
        const time = await Time.create(newTime)
        return res.status(201).send(time)

    }catch(error){
        console.log(error)
    }
})

conn

app.listen(PORT, () => console.log(`Server rodando em http://localhost:${PORT}`))