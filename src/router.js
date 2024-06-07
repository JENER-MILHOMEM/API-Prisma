const express = require('express')
const usermiddleware = require('./middlewares/userMiddlewares')
const router = express.Router()
const userController = require('./controllers/userController')
const authController = require('./controllers/authController')


router.get('/user',  userController.getAll)

router.post('/user',usermiddleware.validation, userController.create)

router.put('/user/:id', userController.update)

router.delete('/user/:id', userController.deleteUser)
router.post('/auth', authController.autenticate)


module.exports = router