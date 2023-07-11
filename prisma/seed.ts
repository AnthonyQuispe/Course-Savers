import { PrismaClient } from "@prisma/client";
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {

    const schoolsArr = ["University of Florida", "University of Miami", "Florida International University", "Florida State University"];

    const campusArr = ["North Campus", "South Campus", "East Campus", "West Campus"];

    for (let i = 0; i < schoolsArr.length; i++) {
        await prisma.schools.create({
            data: {
                name: schoolsArr[i],
            },
        });
    }

    for (let i = 0; i < campusArr.length; i++) {
        await prisma.campus.create({
            data: {
                name: campusArr[i],
            },
        });
    }

    for (let i = 0; i < 100; i++) {
        await prisma.users.create({
            data: {
                username: faker.internet.userName(),
                email: faker.internet.email(),
                password: faker.internet.password(),
                firstname: faker.person.firstName(),
                lastname: faker.person.lastName(),
                school: {
                    connect: {
                        id: Math.floor(Math.random() * 4) + 1,
                    },
                },
            },
        });
    }
}

main().catch(e => {
    console.error(e);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
})