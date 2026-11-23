import express from 'express'
import { createMarks, showMarks } from '../controller/marks.js'

const marksRouter = express.Router()


marksRouter.get('/marks',  showMarks)

marksRouter.post('/marks', createMarks)