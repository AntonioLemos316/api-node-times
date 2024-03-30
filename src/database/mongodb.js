import mongoose from 'mongoose'
import 'dotenv/config'

const USER = process.env.DB_USER
const PASSWORD = process.env.DB_PASSWORD
const DATABASE = process.env.DB_DATABASE

const conn = mongoose.connect(`mongodb+srv://${USER}:${PASSWORD}@${DATABASE}`)
.then(() => console.log('Conectado a DB!'))
.catch(() => console.log('Erro ao se conectar!'))

export default conn