import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()
export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const reqSemester = req.nextUrl.searchParams.get('semesterId')

        // console.log(reqEmail)
        if (reqSemester === null) {
            // Handle the case when 'email' parameter is not present in the URL
            return NextResponse.json({ error: "Teacher Id parameter not provided" }, { status: 400 });
        }

        const matchingSemester = await prisma.semesters.findFirst({
            where: {
                id: Number(reqSemester)
            }
        })

        return NextResponse.json(matchingSemester);
    } catch (error) {
        console.error("Error occurred:", error)
        throw error; // Rethrow the error to let the server handle it
    }
}