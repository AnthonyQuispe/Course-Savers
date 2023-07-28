'use client'

import Image from "next/image"
import backButtonIcon from "../../../public/icons/back-button-icon.png";
import filterIcon from "../../../public/icons/filter-icon.png";
import ResultsScheduleElement from "../components/ResultsScheduleElement/ResultsScheduleElement";
import ResultsClassElement from "../components/ResultsClassElement/ResultsClassElement";

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

export default async function Results() {

    const searchParams = useSearchParams()
    const router = useRouter();
    const newSession = useSession();
    const { data: session, status } = newSession

    const [foundClasses, setFoundClasses] = useState<ClassData[]>([])
    const [userClasses, setUserClasses] = useState<AllClassData[]>([])

    const getTerm = searchParams.get('term') ?? ''
    const getCourse = searchParams.get('course') ?? ''
    const getEmail = searchParams.get('email') ?? ''

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
            console.log(`User classes ${results.data}`)
            setUserClasses(results.data)
        })
    }, [status])

    useEffect(() => {
        console.log(userClasses)
    }, [userClasses])

    return (
        <div className="pt-[44px]">
            <div className="flex justify-between px-3">
                <Image src={backButtonIcon} alt="back button" />
                <Image src={filterIcon} alt="filter button" />
            </div>
            <p className=" text-PrimaryPurp underline pl-6 pb-3 font-bold">My Schedule</p>
            <div>
                <ResultsScheduleElement scheduleData={userClasses}/>
            </div>
            <div>
                <div className="p-6">
                    <h2 className=" text-DarkPurp text-xl font-extrabold pt-10 pb-3">SELECT CLASSES</h2>
                    <p>Results for: </p><span className=" italic"></span>
                </div>
                <section>
                    <ResultsClassElement resultData={foundClasses} />
                </section>
            </div>
        </div>
    )
}