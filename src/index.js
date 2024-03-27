import express from 'express'

const app = express()
const PORT = 3000

app.use(express.json())

app.get('/teste', (req, res) => {
    res.send('Olá Mundo!, no endpoint /teste com o metodo GET')
})

app.listen(PORT, () => console.log(`Server rodando em http://localhost:${PORT}`))