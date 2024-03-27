import express from 'express'
import conn from './database/mongodb.js'

const app = express()
const PORT = 3000

app.use(express.json())

app.get('/teste', (req, res) => {
    res.send('Olá Mundo!, no endpoint /teste com o metodo GET')
})

conn

app.listen(PORT, () => console.log(`Server rodando em http://localhost:${PORT}`))