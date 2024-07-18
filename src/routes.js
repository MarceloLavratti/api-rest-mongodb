import { Router } from 'express'
import ClientController from './controllers/clientController.js'

const router = Router()

router.get('/clients', ClientController.getAllClients)
router.post('/clients', ClientController.createClient)

export default router