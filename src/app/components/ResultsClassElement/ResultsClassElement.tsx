'use client'

import Image from "next/image";
import downArrowIcon from "../../../../public/icons/down-arrow-icon.png";
import upArrowIcon from "../../../../public/icons/up-arrow-icon.png";
import infoIcon from "../../../../public/icons/info-icon.png";
import { useEffect, useState } from "react";

interface ClassData {
    id: number;
    courseId: number;
    semesterId: number;
    schedule: string;
    teacherId: number;
}

interface ResultsClassElementProps {
    resultData: ClassData[]; // Use 'resultData' instead of 'data'
}

interface ClassResult {
    id: number,
    name: string,
    credits: number
}

async function getSemesterDetails(semesterId: number) {
    const request = await fetch(`/api/semesters?semesterId=${semesterId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    // console.log(request)

    return request.json()
}

async function getCourseNames(courseId: number) {
    const request = await fetch(`/api/courses?courseId=${courseId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    // console.log(request)

    return request.json()
}

async function getTeacherName(teacherId: number) {
    const request = await fetch(`/api/teachers?teacherId=${teacherId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })

    return request.json()
}

const CourseItem = async ({ opacity, id, courseId, schedule, semesterId, teacherId }: { opacity: string, schedule: string, id: number, courseId: number, semesterId: number, teacherId: number }) => {
    const [showDetails, setShowDetails] = useState(false);

    const [classResult, setClassResult] = useState<ClassResult>()

    const [classTeacher, setClassTeacher] = useState("")

    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")

    useEffect(() => {
        getCourseNames(courseId).then((results) => {
            // console.log(results)
            setClassResult(results)
        })

        getTeacherName(teacherId).then((teacherResult) => {
            const { firstname, lastname } = teacherResult;
            let teacherName = `${firstname} ${lastname}`
            // console.log(teacherResult)
            // console.log(teacherName)
            setClassTeacher(teacherName)
        })

        getSemesterDetails(semesterId).then((foundSemester) => {
            const { startDate, endDate } = foundSemester;
            setStartDate(startDate)
            setEndDate(endDate)
        })

    }, [])

    function formatDate(startDateString: string, endDateString: string) {
        const startDate = new Date(startDateString);
        const endDate = new Date(endDateString);
        const day1 = startDate.getDate().toString().padStart(2, '0');
        const month1 = (startDate.getMonth() + 1).toString().padStart(2, '0');
        const day2 = endDate.getDate().toString().padStart(2, '0');
        const month2 = (endDate.getMonth() + 1).toString().padStart(2, '0');
        return `${day1}/${month1} - ${day2}/${month2}`;
    }

    return (
        <div>
            <div className={`flex flex-col items-stretch px-6 bg-GrayPurp ${opacity}`}>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <h2 className="text-xl font-semibold">{classResult?.name}</h2>
                        <Image onClick={() => setShowDetails(!showDetails)} src={downArrowIcon} alt="toggle details arrow" />
                    </div>
                    <div className="flex items-center">
                        <Image className="w-5 h-5" src={infoIcon} alt="more info button" />
                        <h2 className="pl-8 underline font-extrabold text-DarkPurp">Add</h2>
                    </div>
                </div>
            </div>
            {showDetails && <div className="flex bg-white p-6 text-[20px]">
                <div className="pr-6 font-medium">
                    <p>Dates:</p>
                    <p>Status:</p>
                    <p>When:</p>
                    <p>Instructor:</p>
                    <p>Credits:</p>
                    <p>Cost:</p>
                </div>
                <div className=" font-light">
                    <p>{formatDate(startDate, endDate)}</p>
                    <p>Open</p>
                    <p>{`${schedule} @ 11a -12p`}</p>
                    <p>{classTeacher}</p>
                    <p>{classResult?.credits}</p>
                    <p>$400</p>
                </div>
            </div>}
        </div>
    )
};


const ResultsClassElement: React.FC<ResultsClassElementProps> = ({ resultData }) => {
    return (
        <div>
            {resultData.map((classItem, index) => {
                return <CourseItem key={classItem.id} opacity={index === 1 ? "" : "opacity-40"} {...classItem} />;
            })}
        </div>
    );
}

export default ResultsClassElement;