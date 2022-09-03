export interface Result<T, E> {
    error: E | null
    data: T | null
}