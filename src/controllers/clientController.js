import Client from '../models/clientModel.js'
import ClientRepository from '../repositories/clientRepository.js'

class ClientController {

    async getAllClients(req, res) {
        try {
            const clients = await Client.find()
            res.json(clients)
        } catch (err) {
            console.log(err)
            console.error(err.message)
            res.status(500).send('Server error')
        }
    }

    async createClient(req, res) {
        try {
            // const { name, email, password } = req.body
            // let client = new Client({
            //     name,
            //     email,
            //     password,
            // })
            const client = new Client(req.body)
            await client.save()
            res.status(201).json(client)
        } catch (err) {
            console.error(err.message)
            res.status(500).send('Server error')
        }
    }    
}
export default new ClientController