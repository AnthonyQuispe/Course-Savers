import NextAuth from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcrypt";

const prisma = new PrismaClient()

// export default NextAuth({
//     adapter: PrismaAdapter(prisma),
// })