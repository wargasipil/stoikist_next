import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

// untuk getting find middleware
prisma.$use(async (params, next) => {
  if(params.model == 'Promo'){
    if(params.action === 'findMany'){
      if (params.args.where) {
        if (params.args.where.deleted == undefined) {
          // Exclude deleted records if they have not been explicitly requested
          params.args.where['deleted'] = false
        }
      } else {
        params.args['where'] = { deleted: false }
      }
    }
  }
  return next(params)
})

// untuk middleware delete promo
prisma.$use(async (params, next) => {
  if(params.model === 'Promo'){
    if (params.action == 'delete') {
      // Delete queries
      // Change action to an update
      params.action = 'update'
      params.args['data'] = { deleted: true }
    }
    if (params.action == 'deleteMany') {
      // Delete many queries
      params.action = 'updateMany'
      if (params.args.data != undefined) {
        params.args.data['deleted'] = true
      } else {
        params.args['data'] = { deleted: true }
      }
    }
  }

  return next(params)
})


// untuk product


// untuk getting find middleware
prisma.$use(async (params, next) => {
  if(params.model == 'Product'){
    if(params.action === 'findMany'){
      if (params.args.where) {
        if (params.args.where.deleted == undefined) {
          // Exclude deleted records if they have not been explicitly requested
          params.args.where['deleted'] = false
        }
      } else {
        params.args['where'] = { deleted: false }
      }
    }
  }
  return next(params)
})

// untuk middleware delete promo
prisma.$use(async (params, next) => {
  if(params.model === 'Product'){
    if (params.action == 'delete') {
      // Delete queries
      // Change action to an update
      params.action = 'update'
      params.args['data'] = { deleted: true }
    }
    if (params.action == 'deleteMany') {
      // Delete many queries
      params.action = 'updateMany'
      if (params.args.data != undefined) {
        params.args.data['deleted'] = true
      } else {
        params.args['data'] = { deleted: true }
      }
    }
  }

  return next(params)
})
