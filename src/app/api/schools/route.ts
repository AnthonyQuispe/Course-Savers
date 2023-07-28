import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()
export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const schoolArr = await prisma.schools.findMany()
        const campusArr = await prisma.campus.findMany()
        const registrationData = { schoolArr, campusArr }
        // console.log(registrationData)
        return NextResponse.json({ data: registrationData });
    } catch (error) {
        console.error("Error occurred:", error)
        throw error; // Rethrow the error to let the server handle it
    }
}