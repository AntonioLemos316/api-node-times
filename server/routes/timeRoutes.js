import express from 'express'
import Controller from '../controllers/timeController.js'

const router = express.Router()

router.get('/', Controller.findAll)
router.post('/', Controller.create)
router.get('/:id', Controller.findById)
router.patch('/:id', Controller.update)
router.delete('/:id', Controller.findAndDelete)

export default router