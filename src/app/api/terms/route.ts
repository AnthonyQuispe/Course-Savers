import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()
export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const reqEmail = req.nextUrl.searchParams.get('email')
        // console.log(reqEmail)
        if (reqEmail === null) {
            // Handle the case when 'email' parameter is not present in the URL
            return NextResponse.json({ error: "Email parameter not provided" }, { status: 400 });
        }
        const user = await prisma.users.findFirst({
            where: {
                email: reqEmail
            }
        })
        // console.log(user)
        const termArr = await prisma.semesters.findMany({
            where: {
                campusId: user?.campusId
            }
        })
        return NextResponse.json({ data: termArr });
    } catch (error) {
        console.error("Error occurred:", error)
        throw error; // Rethrow the error to let the server handle it
    }
}