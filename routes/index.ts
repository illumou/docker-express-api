import express from 'express'
const router = express.Router()
import { BikeRouter } from './bikes'
import { CarRouter } from './cars'

router.use('/bikes', BikeRouter)
router.use('/cars', CarRouter)

export { router }