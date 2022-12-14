import { PrismaClient } from '@prisma/client'
import { DeepMockProxy } from 'jest-mock-extended'
import { prisma } from './database'



// jest.mock('./client', () => ({
//   __esModule: true,
//   default: mockDeep<PrismaClient>(),
// }))

// beforeEach(() => {
//   mockReset(prismaMock)
// })

export const prismaMock = prisma as unknown as DeepMockProxy<PrismaClient>