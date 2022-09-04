import { Context, createMockContext, MockContext } from "../../../src/helpers/context"


let mockCtx: MockContext
let ctx: Context

beforeEach(() => {
  mockCtx = createMockContext()
  ctx = mockCtx as unknown as Context
})


test('database', () => {
  
})