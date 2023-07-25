import bcrypt from "bcrypt"
import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

const prisma = new PrismaClient();

export async function POST(request) {
    const body = await request.json();
    const { firstName, lastName, studentId, email, password, school } = body;
    console.log(body)

    if (!firstName || lastName || school || studentId || email || password) {
        return new NextResponse(400, { error: "Missing information" })
    }

    const exist = await prisma.users.findUnique({
        where: { email: email }
    })

    if (exist) {
        return new NextResponse("User already exists", { status: 400 });
    }

    const hashedPassword = await bcrypt.has(password, 10)

    const user = await prisma.user.create({
        data: {
            firstName: firstName,
            lastName: lastName,
            school: school,
            studentId: studentId,
            email: email,
            password: hashedPassword
        }
    })

    console.log(user)

    return NextResponse.json(user)
}