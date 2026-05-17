import mongoose from 'mongoose'

const conn = mongoose.connect(`mongodb://127.0.0.1:27017/api-times`)
.then(() => console.log('Conectado a DB!'))
.catch(() => console.log('Erro ao se conectar!'))

export default conn