import { NextApiRequest, NextApiResponse } from "next"
import formidable, { File } from 'formidable'
import { prisma } from "../../../src/helpers/database"
import fs from 'fs'
import { Resource } from "@prisma/client"

async function saveFile(file: formidable.Files): Promise<Resource> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const image: File = file.image as any

  const pathname = `public/resources/${image.originalFilename}`

  const data = fs.readFileSync(image.filepath)
  fs.writeFileSync(pathname, data)
  fs.unlinkSync(image.filepath)
  

  const resource = await prisma.resource.create({
    data: {
      path: `/resources/${image.originalFilename}`
    }
  })
  
  return resource
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const form = new formidable.IncomingForm()
  const files: formidable.Files = await new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err)
      resolve(files)
    })
  })
  const resource = await saveFile(files)
  return res.status(201).send(resource)
}

export const config = {
  api: {
    bodyParser: false,
  },
}