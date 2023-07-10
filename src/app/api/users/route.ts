import { NextResponse } from "next/server";

export async function GET() {
    const userData = {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@example.com',
    }

    return NextResponse.json({ data: userData }, { status: 200 })
}

export async function PUT(request: Request) {
    const { firstName, lastName, email } = await request.json();

    updateUser(firstName, lastName, email);

    const updatedUserData = {
        firstName,
        lastName,
        email,
    }

    return NextResponse.json({ data: updatedUserData })
}

function updateUser(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email)
}

export async function POST(request: Request) {
    const { firstName, lastName, email } = await request.json();

    const userId = createUser(firstName, lastName, email);

    const newUserData = {
        id: userId,
        firstName,
        lastName,
        email,
    }

    return NextResponse.json({ data: newUserData })
}

function createUser(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email)
}