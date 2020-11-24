import express from 'express'

import { createUser, getUser, siginUser, updateUser, getUsers, getUnsuscbribedUser } from '../controllers/usersController.js'
import verifyToken from '../middlewares/verifyAuth.js'

const router = express.Router()
router.post('/auth/signup', createUser)
router.post('/auth/signin', siginUser)
router.get('/users', verifyToken, getUsers)
router.put('/users/:id', verifyToken, updateUser)
router.get('/users/:id', verifyToken, getUser)
router.post('/users/nonsubscriber', verifyToken, getUnsuscbribedUser)

export default router
