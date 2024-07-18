import mongoose from "mongoose"

const ClientSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    }
})

// Cria e exporta o modelo 'Client' baseado no esquema definido
export default mongoose.model('Client', ClientSchema)