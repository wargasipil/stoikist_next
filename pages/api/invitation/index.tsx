import { NextApiRequest, NextApiResponse } from "next"

interface Res {
    code: number
    msg: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Res>){
    const { method } = req

    switch (method) {
        case 'POST':
            res.status(200).json({
                code: 1,
                msg: "not allowed"
            })

            break

        default:
            res.status(500).json({
                code: 1,
                msg: "not allowed"
            })
    }
}