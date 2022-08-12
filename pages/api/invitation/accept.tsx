import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../helpers/database'
import { hashPassword } from '../../../helpers/cripto'
import { RegisterPayload } from '../../../payload/user'

interface RegisterRequest extends NextApiRequest {
    body: RegisterPayload
}

interface Res {
    code: number
    msg: string
}

export default async function handler(req: RegisterRequest, res: NextApiResponse<Res>) {
    const { body } = req
    const { email, username, name} = body
    console.log(body, typeof body)
    await prisma.user.create({
        data: {
            email,
            password: hashPassword(body.password),
            name,
            username
        }
    })

    res.status(200).send({
        code: 0,
        msg: "success"
    })

}