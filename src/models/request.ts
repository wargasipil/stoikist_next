import { z } from 'zod'

export const validatePaginateQuery = {
  page: z.number().or(z.string().regex(/\d+/).transform(Number)).default(1),
  limit: z.number().or(z.string().regex(/\d+/).transform(Number)).default(50)
}
