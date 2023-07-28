'use client'

import Image from "next/image"
import backButtonIcon from "../../../public/icons/back-button-icon.png";
import filterIcon from "../../../public/icons/filter-icon.png";
import ResultsScheduleElement from "../../components/ResultsScheduleElement/ResultsScheduleElement";
import ResultsClassElement from "../../components/ResultsClassElement/ResultsClassElement";

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation'

interface ClassData {
    id: number;
    courseId: number;
    semesterId: number;
    schedule: string;
    teacherId: number;
}

interface AllClassData {
    id: number;
    courseId: number;
    semesterId: number;
    schedule: string;
    teacherId: number;
    name: string
}

interface ResultsClassElementProps {
    resultsData: ClassData[];
    onAddClassClick: (classId: number) => void;
}

interface ClassAdded {
    id: number,
    name: string,
    schedule: string,
    time: string
}

async function submitData(term: string, course: string) {
    const request = await fetch(`/api/searchResults?term=${term}&course=${course}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })

    return request.json()
}

async function getUserData(email: string) {
    const request = await fetch(`/api/userClasses?email=${email}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })

    return request.json()
}

export default function Results() {

    const searchParams = useSearchParams()
    const router = useRouter();
    const newSession = useSession();
    const { data: session, status } = newSession

    const [foundClasses, setFoundClasses] = useState<ClassData[]>([])
    const [userClasses, setUserClasses] = useState<AllClassData[]>([])
    const [classAdded, setClassAdded] = useState<ClassAdded | null>();

    const getTerm = searchParams.get('terms') ?? ''
    const getCourse = searchParams.get('course') ?? ''
    const getEmail = searchParams.get('email') ?? ''

    const addToRegisterClass = (classInfo: any) => {
        if (classAdded && classAdded.id === classInfo.id) {
            setClassAdded(null); // Toggle to null if the same class is clicked again
        } else {
            setClassAdded(classInfo); // Set to the new classInfo if a different class is clicked
        }
    }

    // console.log(getTerm, getCourse)

    useEffect(() => {
        if (status !== "authenticated") {
            router.push('/sign-in')
        }
        submitData(getTerm, getCourse).then((results) => {
            // console.log(results)
            setFoundClasses(results.classes)
        })

        getUserData(getEmail).then((results) => {
            // console.log(`User classes ${results.data}`)
            setUserClasses(results.data)
        })
    }, [status])

    // useEffect(() => {
    //     console.log(classAdded)
    // }, [classAdded])

    function handleRegisterClass() {
        if (classAdded) {
            router.push(`/check-out?classId=${classAdded.id}`)
        } else {
            throw new Error('No Class Selected')
        }
        console.log(classAdded)
    }

    return (
        <div className="pt-[44px]">
            <div className="flex justify-between px-3">
                <Image src={backButtonIcon} alt="back button" onClick={() => router.back()} />
                <Image src={filterIcon} alt="filter button" />
            </div>
            <p className=" text-PrimaryPurp underline pl-6 pb-3 font-bold">My Schedule</p>
            <div>
                <ResultsScheduleElement scheduleData={userClasses} classToRegister={classAdded} />
            </div>
            <div>
                <div className="p-6 pt-[3rem]">
                    { classAdded ?
                        <button onClick={handleRegisterClass} className="bg-PrimaryPurp rounded-full w-full p-3 text-white text-xl font-extrabold">Register</button> : ""
                    }
                </div>
                <div className="p-6">
                    <h2 className=" text-DarkPurp text-xl font-extrabold pb-3">SELECT CLASSES</h2>
                    <span>Results for: </span>
                    <span className=" italic">{getCourse === '' ? 'All Courses' : getCourse} {/* - {getTerm} */}</span>
                </div>
                <section>
                    <ResultsClassElement resultData={foundClasses} addToRegisterClass={addToRegisterClass} />
                </section>
            </div>
        </div>
    )
}