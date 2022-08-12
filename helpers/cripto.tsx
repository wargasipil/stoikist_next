import * as CryptoJS from 'crypto-js'

export function hashPassword(password: string): string {
    return CryptoJS.MD5(password).toString()
}