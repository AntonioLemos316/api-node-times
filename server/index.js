import express from 'express'
import morgan from 'morgan'
import conn from './database/mongodb.js'
import timeRoutes from './routes/timeRoutes.js'
import userRoutes from './routes/userRoutes.js'


const app = express()
const PORT = 3000
const API = 'api/v1'

app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(`/${API}/times`, timeRoutes)
app.use(`/${API}/user`, userRoutes)

conn

// Middleware caso não passe uma rota válida
app.use((req, res) => {
    res.status(404).send({message: '404 - Not Found, rota inválida!'});
});

app.listen(PORT, () => console.log(`Server rodando em http://localhost:${PORT}`))