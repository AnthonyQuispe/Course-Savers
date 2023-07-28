import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function POST(req: NextRequest, res: NextResponse) {
    const requestBody = req.body
    console.log(requestBody)
    try {
        const { classId, userEmail } = await req.json();
        // console.log(reqEmail)
        if (!classId || !userEmail) {
            // Handle the case when 'email' parameter is not present in the URL
            return NextResponse.json({ error: "Class Id or User email parameter not provided" }, { status: 400 });
        }

        const user = await prisma.users.findFirst({
            where: {
                email: userEmail,
            },
        });

        const classObj = await prisma.classes.findFirst({
            where: {
                id: Number(classId),
            },
        });

        const addUserClass = await prisma.userClasses.create({
            data: {
                user: {
                    connect: {
                        id: user?.id,
                    },
                },
                class: {
                    connect: {
                        id: classObj?.id,
                    },
                },
            },
        });

        return NextResponse.json(addUserClass);
    } catch (error) {
        console.error("Error occurred:", error)
        throw error; // Rethrow the error to let the server handle it
    }
}

//find all class info from specific user
export async function GET(req: NextRequest, res: NextResponse) {

    interface ClassData {
        id: number;
        courseId: number;
        semesterId: number;
        schedule: string;
        teacherId: number;
        name: string; // This property will be added when merging foundClass and foundCourse
    }

    const allUserClasses: ClassData[] = [];

    try {

        const reqEmail = req.nextUrl.searchParams.get('email');

        if (!reqEmail) {
            // Handle the case when 'email' parameter is not present in the URL
            return NextResponse.json({ error: "User email parameter not provided" }, { status: 400 });
        }

        //all user classes
        const allUserSchedules = await prisma.userClasses.findMany({
            where: { userEmail: reqEmail }
        })
        //push to this array
        const allUserClasses = []

        for (let i = 0; i < allUserSchedules.length; i++) {
            //find class
            const foundClass = await prisma.classes.findFirst({
                where: { id: allUserSchedules[i].classId }
            })
            //find class name
            const foundCourse = await prisma.courses.findFirst({
                where: { id: allUserSchedules[i].classId }
            })
            if (foundClass && foundCourse) {
                const classData = {
                    id: foundClass.id,
                    courseId: foundClass.courseId,
                    semesterId: foundClass.semesterId,
                    schedule: foundClass.schedule,
                    teacherId: foundClass.teacherId,
                    name: foundCourse.name // Add the 'name' property
                };
                allUserClasses.push(classData)
            }
        }
        console.log({ data: allUserClasses })
        return NextResponse.json({ data: allUserClasses });
    } catch (error) {
        console.error("Error occurred:", error)
        throw error; // Rethrow the error to let the server handle it
    }
}