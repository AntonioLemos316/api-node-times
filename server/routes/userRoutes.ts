import express from 'express'
import userController from '../controllers/userController.js'

const router = express.Router()

router.post('/', userController.create)
router.put('/:id', userController.findAndAssociete)

export default router