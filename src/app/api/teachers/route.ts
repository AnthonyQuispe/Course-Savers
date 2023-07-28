import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()
export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const reqTeacher = req.nextUrl.searchParams.get('teacherId')

        // console.log(reqEmail)
        if (reqTeacher === null) {
            // Handle the case when 'email' parameter is not present in the URL
            return NextResponse.json({ error: "Teacher Id parameter not provided" }, { status: 400 });
        }

        const matchingTeacher = await prisma.teachers.findFirst({
            where: {
                id: Number(reqTeacher)
            }
        })

        return NextResponse.json(matchingTeacher);
    } catch (error) {
        console.error("Error occurred:", error)
        throw error; // Rethrow the error to let the server handle it
    }
}