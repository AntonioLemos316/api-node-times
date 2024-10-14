import express from 'express'
import timeController from '../controllers/timeController.js'

const router = express.Router()

router.get('/', timeController.findAll)
router.post('/', timeController.create)
router.get('/:id', timeController.findById)
router.patch('/:id', timeController.update)
router.delete('/:id', timeController.findAndDelete)

export default router