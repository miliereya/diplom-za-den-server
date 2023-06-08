const Router = require('express').Router
const router = new Router()
const userController = require('../controllers/user.controller')
const courseController = require('../controllers/course.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const adminMiddleware = require('../middlewares/admin.middleware')

router.get('/auth/refresh', authMiddleware, userController.refresh)
router.post('/auth/register', userController.registration)
router.post('/auth/login', userController.login)

router.get('/course/find', courseController.findAll)
router.get('/course/find-admin', adminMiddleware, courseController.findAllAdmin)
router.post('/course/create', adminMiddleware, courseController.create)
router.post('/course/update', adminMiddleware, courseController.update)
router.delete('/course/:_id', adminMiddleware, courseController.delete)
router.get('/course/:_id', courseController.findById)

module.exports = router
