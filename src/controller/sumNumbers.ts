import { Request, Response } from "express"

const sumNumber = (req:Request, res: Response) => {
    const { num1, num2 } = req.body

    const sum = Number(num1) + Number(num2)
    
    res.send({ msg: `A soma é: ${sum}` })
}

export { sumNumber }