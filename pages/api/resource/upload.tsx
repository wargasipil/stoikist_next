import { NextApiRequest, NextApiResponse } from "next"
import formidable from 'formidable'
import { prisma } from "../../../src/helpers/database"
import { v4 as uuid4 } from 'uuid'
import fs from 'fs'
import { Resource } from "@prisma/client"

async function saveFile(file: formidable.File): Promise<Resource> {
  console.log(file, 'asdasda')
  const pathname = `public/resources/${uuid4()}`

  const data = fs.readFileSync(file.filepath)
  fs.writeFileSync(pathname, data)
  await fs.unlinkSync(file.filepath)
  

  const resource = await prisma.resource.create({
    data: {
      path: pathname
    }
  })
  
  return resource
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const form = new formidable.IncomingForm()
  const files: formidable.Files = await new Promise((resolve, reject) => {
    form.parse(req, async (err, fields, files) => {
      console.log(err, fields, files)
      if (err) return reject(err)
      resolve(files)
    })
  })
  const resource = await saveFile(files.file as formidable.File)
  return res.status(201).send(resource)
}