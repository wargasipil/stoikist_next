export interface PaginateRes<T> {
    items: T[]
    pagination: {
        page: number
        limit: number
        total: number
    }
}