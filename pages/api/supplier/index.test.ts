import { isQuery } from './index'

test("filtering query work", () => {
    isQuery.parse({
        type_id: 1,
        page: "1"
    })

    isQuery.parse({
        page: "5"
    })
})