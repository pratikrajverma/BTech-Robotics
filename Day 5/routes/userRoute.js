
import express from 'express'
import { createUser, deleteuser, getuser, updateUser } from '../controllers/user.js'

const router = express.Router()




router.get('/user',  getuser)

router.post('/user', createUser)

router.put('/user/:id', updateUser)


router.delete('/user/:id', deleteuser  )


export default router






