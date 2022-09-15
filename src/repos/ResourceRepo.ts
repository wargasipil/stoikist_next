import { Prisma } from "@prisma/client"
import fs from 'fs'


export async function deleteResource(prisma: Prisma.TransactionClient, res_id: number){
  const resource = await prisma.resource.findFirst({
      where: {
        id: res_id
      }
  })
  if(resource){
    fs.unlinkSync(resource.path)
    await prisma.resource.delete({
      where: {
        id: resource.id
      }
    })
  }
  
}