import { Router} from 'express'
import { sumNumber } from './controller/sumNumbers'

const router = Router()

router.get('/', (req, res) => {
    res.send({ msg: 'server started' })
})

router.post('/user', sumNumber)

export { router }