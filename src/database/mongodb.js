import mongoose from 'mongoose'
import 'dotenv/config'

const conn = mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_DATABASE}`)
.then(() => console.log('Conectado a DB!'))
.catch(() => console.log('Erro ao se conectar!'))

export default conn