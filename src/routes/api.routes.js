const { Router } = require('express')

const router = Router()

const {categoryCreateController} = require('../controllers/category.controller')
const {serviceCreateController, ServiceALLController} = require('../controllers/service.controller')

router.post('/crearCategory', categoryCreateController )
router.post('/crearService', serviceCreateController )
router.get('/allServices', ServiceALLController)


module.exports = router