import Client from '../models/clientModel.js'

class ClientController {

    async getAllClients(req, res) {
        try {
            const client = await Client.find()
            res.status(200).send(client)
        } catch (err) {
            console.error(err.message)
            res.status(500).send('Server error')
        }
    }

    async getClientById(req, res) {
        try{
            const client = await Client.findById(req.params.id)
            res.status(200).send(client)
        } catch (err) {
            console.error(err.message)
            res.status(500).send('Server error')
        }
    }

    async createClient(req, res) {
        try {
            const client = new Client(req.body)
            await client.save()
            res.status(201).send(client)
        } catch (err) {
            console.error(err.message)
            res.status(500).send('Server error')
        }
    }

    async updateClient(req, res) {
        try {
            const client = await Client.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
            })
            res.status(201).send(client)
        } catch (err) {
            console.error(err.message)
            res.status(500).send('Server error')
        }
    }

    async deleteClient(req, res) {
        try{
            const client = await Client.findOneAndDelete(req.params.id)
            res.status(201).send('Cliente removido com sucesso.')
        } catch (err) {
            console.error(err.message)
            res.status(500).send('Server error')
        }
    }
}
export default new ClientController