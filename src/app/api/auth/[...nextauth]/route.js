import NextAuth from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";

const prisma = new PrismaClient()


export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "email", type: "text" },
                password: { label: "password", type: "password" }
            },
            async authorize(credentials) {
                //check to see if email and password is valid
                //if no email or password
                if (!credentials.email || !credentials.password) {
                    return null;
                }
                //check to see if user exists
                const user = await prisma.users.findUnique({
                    where: { email: credentials.email }
                })
                //if user doesn't exist
                if (!user) {
                    return null;
                }
                //check if password matches username
                // const passwordsMatch = await bcrypt.compare(credentials.password, user.password);

                //if password doesn't match
                if (user.password !== credentials.password) {
                    console.log('theres an error')
                    return null;
                }

                //return user object
                return user;
            }
        })
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }