const express = require('express')

const router = express.Router()
const userController = require('./controllers/userController')


router.get('/user', userController.getAll)

router.post('/user', userController.create)

router.put('/user/:id', userController.update)

router.delete('/user/:id', userController.deleteUser)


module.exports = router