import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()
export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const reqClassId = req.nextUrl.searchParams.get('classId')
        console.log(reqClassId)
        if (reqClassId === null) {
            // Handle the case when 'email' parameter is not present in the URL
            return NextResponse.json({ error: "Email parameter not provided" }, { status: 400 });
        }
        const classInfo = await prisma.classes.findFirst({
            where: {
                id: Number(reqClassId)
            }
        })

        return NextResponse.json({ data: classInfo });
    } catch (error) {
        console.error("Error occurred:", error)
        throw error; // Rethrow the error to let the server handle it
    }
}