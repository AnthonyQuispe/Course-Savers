import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()
export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const reqTerm = req.nextUrl.searchParams.get('term');
        const reqCourse = req.nextUrl.searchParams.get('course')

        // console.log(reqEmail)
        if (reqTerm === null || reqCourse === null) {
            // Handle the case when 'email' parameter is not present in the URL
            return NextResponse.json({ error: "Term or course parameter not provided" }, { status: 400 });
        }
        // const user = await prisma.users.findFirst({
        //     where: {
        //         email: reqEmail
        //     }
        // })
        // // console.log(user)
        // const termArr = await prisma.semesters.findMany({
        //     where: {
        //         campusId: user?.campusId
        //     }
        // })
        const matchingCourses = await prisma.courses.findMany({
            where: {
                name: { contains: reqCourse }
            }
        })
        const classesInTerm = await prisma.classes.findMany({
            where:
            {
                semesterId: Number(reqTerm)
            }
        })

        const matchingClasses = []
        let classes;

        for (let i = 0; i < classesInTerm.length; i++) {
            for (let j = 0; j < matchingCourses.length; j++) {
                if (classesInTerm[i].courseId === matchingCourses[j].id) {
                    matchingClasses.push(classesInTerm[i])
                }
            }
        }

        if (matchingClasses.length === 0) {
            classes = "Error: No classes found"
        } else {
            classes = matchingClasses
        }

        return NextResponse.json({ classes });
    } catch (error) {
        console.error("Error occurred:", error)
        throw error; // Rethrow the error to let the server handle it
    }
}