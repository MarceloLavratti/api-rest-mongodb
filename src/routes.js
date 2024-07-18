import { Router } from 'express'
import ClientController from './controllers/clientController.js'

const router = Router()

router.get('/clients', ClientController.getAllClients)
router.get('/clients/:id', ClientController.getClientById)
router.post('/clients', ClientController.createClient)
router.put('/clients/:id', ClientController.updateClient)
router.delete('/clients/:id', ClientController.deleteClient)

export default router