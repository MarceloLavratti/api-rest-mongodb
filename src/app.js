import express from 'express'
import connectDB from './config/database.js'
import routes from './routes.js'

const app = express()

connectDB()

app.use(express.json())
app.use('/', routes)

export default app

// const app = express()
// app.use(express.json())
// const PORT = 5000
// mongoose.connect('mongodb+srv://marcelol:porcoaranha@api-clients.wrsuazq.mongodb.net/?retryWrites=true&w=majority&appName=api-clients')

// const Client = mongoose.model('Client', {
//     name: String,
//     email: String,
//     password: String
// })

// app.get('/', async (req, res) => {
//     const clients =  await Client.find()
//     res.send(clients)
// })

// app.post('/', async (req, res) => {
//     const client = new Client({
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password
//     })
//     await client.save()
//     res.send(client)
// })

// app.put('/:id', async (req, res) => {
//     const client = await Client.findByIdAndUpdate(req.params.id, {
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password
//     },{
//         new: true
//     })
//     res.send(client)
// })

// app.delete('/:id', async (req, res) => {
//     const client = await Client.findByIdAndDelete(req.params.id)
//     res.send(client)
// })

// app.listen(PORT, () => {
//     console.log('App rodando')
// })