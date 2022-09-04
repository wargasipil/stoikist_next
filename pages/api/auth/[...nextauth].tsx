import { PrismaAdapter } from "@next-auth/prisma-adapter"
import NextAuth, { Session, User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from "../../../src/helpers/database"
import { hashPassword } from '../../../src/helpers/cripto'


export default NextAuth({
  // adapter: PrismaAdapter(prisma),
  pages: {
    signIn: '/login',
    // signOut: '/signout',
    // error: '/login', // Error code passed in query string as ?error=
    // verifyRequest: '/verify-request', // (used for check email message)
    newUser: '/register' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
        // The name to display on the sign in form (e.g. 'Sign in with...')
        name: 'Credentials',
        // The credentials is used to generate a suitable form on the sign in page.
        // You can specify whatever fields you are expecting to be submitted.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          username: { label: "Username", type: "text", placeholder: "jsmith" },
          password: {  label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          const username: string = credentials?.username || ''

          if(!username){
            return null
          }
          
          

          const user = await prisma.user.findUnique({
            where: {
              username,
            }
          })

          if(!user){
            console.log('username not found', username)
            return null
          }

          const password = hashPassword(credentials?.password || '')
          if (user?.password === password){
            return user
          }
          console.log('password salah', username)
          return null
        }
      })
  ],
  callbacks: {
    async session({ session, token }){
      session.user = token.user as any
      return session
    },
    async jwt({token, user}) {
      user && (token.user = user)
      return token
    }
  }
})