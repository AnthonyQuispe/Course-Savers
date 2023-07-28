import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()
export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const reqCourse = req.nextUrl.searchParams.get('courseId')

        // console.log(reqEmail)
        if (reqCourse === null) {
            // Handle the case when 'email' parameter is not present in the URL
            return NextResponse.json({ error: "Course Id parameter not provided" }, { status: 400 });
        }

        const matchingCourse = await prisma.courses.findFirst({
            where: {
                id: Number(reqCourse)
            }
        })

        return NextResponse.json(matchingCourse);
    } catch (error) {
        console.error("Error occurred:", error)
        throw error; // Rethrow the error to let the server handle it
    }
}