import { PrismaClient } from "@prisma/client";
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {

    const schoolsArr = ["University of Florida", "University of Miami", "Florida International University", "Florida State University"];

    const campusArr = ["North Campus", "South Campus", "East Campus", "West Campus"];

    const degreesArr = ["Associate Degrees in Arts", "Associate Degree in Science", "Bachelor of Science", "Bachelor of Arts"]

    const semestersArr = [
        { semesterName: "Spring", startDate: new Date('2023-01-09'), endDate: new Date('2023-04-28') },
        { semesterName: "Summer", startDate: new Date('2023-05-08'), endDate: new Date('2023-08-18') },
        { semesterName: "Fall", startDate: new Date('2023-08-22'), endDate: new Date('2023-12-16') },
    ];

    const coursesArr = ["MAC", "MGF", "STA", "ENC", "LIT", "SPC", "PSY", "AMH", "BSC", "PHY"];

    //makes schools
    for (let i = 0; i < schoolsArr.length; i++) {
        await prisma.schools.create({
            data: {
                name: schoolsArr[i],
            },
        });
    }

    //makes campuses
    for (let i = 0; i < campusArr.length; i++) {
        await prisma.campus.create({
            data: {
                name: campusArr[i],
            },
        });
    }

    //makes degrees
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < degreesArr.length; j++) {
            await prisma.degrees.create({
                data: {
                    name: degreesArr[j],
                    credits: j < 2 ? 60 : 120,
                    campus: {
                        connect: {
                            id: j + 1
                        }
                    },
                }
            });
        }
    }

    //makes buildings
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < campusArr.length; j++) {
            await prisma.buildings.create({
                data: {
                    name: `${faker.location.city()} Building `,
                    campus: {
                        connect: {
                            id: j + 1
                        }
                    },
                }
            });
        }
    }

    //make semesters
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < semestersArr.length; j++) {
            await prisma.semesters.create({
                data: {
                    name: semestersArr[j].semesterName,
                    campus: {
                        connect: {
                            id: j + 1,
                        },
                    },
                    year: 2023,
                    startDate: semestersArr[j].startDate,
                    endDate: semestersArr[j].endDate,
                },
            });
        }
    }

    // make teachers
    for (let i = 0; i < 10; i++) {
        await prisma.teachers.create({
            data: {
                firstname: faker.person.firstName(),
                lastname: faker.person.lastName(),
            }
        })
    }

    //make courses
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < coursesArr.length; j++) {
            await prisma.courses.create({
                data: {
                    name: `${coursesArr[j]} ${j+1}0${i+1}`,
                    credits: 3
                },
            });
        }
    }

    //make classes
    for (let i = 0; i < 40; i++) {
        await prisma.classes.create({
            data: {
                course: {
                    connect: {
                        id: Math.floor(Math.random() * 40) + 1
                    }
                },
                semester: {
                    connect: {
                        id: Math.floor(Math.random() * 12) + 1
                    }
                },
                schedule: i % 2 === 0 ? "Mon Wed Fri" : "Tue Thurs",
                teacher: {
                    connect: {
                        id: Math.floor(Math.random() * 10) + 1
                    }
                }
            }
        })
    }

    //makes users
    // for (let i = 0; i < 100; i++) {
    //     await prisma.users.create({
    //         data: {
    //             email: faker.internet.email(),
    //             password: faker.internet.password(),
    //             firstname: faker.person.firstName(),
    //             lastname: faker.person.lastName(),
    //             school: {
    //                 connect: {
    //                     id: Math.floor(Math.random() * 4) + 1,
    //                 },
    //             },
    //         },
    //     });
    // }
}

main().catch(e => {
    console.error(e);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
})