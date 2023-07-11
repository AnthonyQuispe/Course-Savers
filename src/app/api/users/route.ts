import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    const usersList = await prisma.users.findMany();
    console.log(usersList)
    return NextResponse.json({ data: usersList }, { status: 201 })
}

export async function POST(request: NextRequest) {
    const { body: data } = await request.json(); //parses json data
    console.log(`this is the body of the request: ${data}`)
    const newUser = await prisma.users.create({ data });
    return NextResponse.json({ data: newUser }, { status: 201 })
}

// export async function PUT(request: NextRequest) {
//     const { body: data } = await request.json();
//     const updateUser = await prisma.users.update({
//         where: { user_username: data.user_username },
//         data: {
//             // Provide the properties to update and their new values
//             user_email: data.user_email,
//         },
//     });

//     return NextResponse.json({ data: updateUser });
// }

export async function DELETE(request: NextRequest) {

    const { query } = await request.json()

    console.log(query)

    /* const deleteUser = await prisma.users.delete({
        where: { user_username: query.user_username },
    }); */

    // return NextResponse.json({ data: deleteUser }, { status: 200 });
}