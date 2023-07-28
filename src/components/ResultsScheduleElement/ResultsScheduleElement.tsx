interface DayCardProps {
    day: string;
    classData: ScheduleData[]; // You can pass the array of ScheduleData to the DayCard component
    classNameInfo: string[] | false;
    classToRegister: any;
}

interface ScheduleData {
    id: number;
    courseId: number;
    semesterId: number;
    schedule: string;
    teacherId: number;
    name: string;
}

const days = ['M', 'T', 'W', 'R', 'F', 'Sa', 'Su'];

function checkDay(dayLetter: string, scheduleData: ScheduleData[]) {
    // console.log(dayLetter)
    //working as expected, each day logs once
    const classesPerDay = [];
    for (let h = 0; h < scheduleData.length; h++) {
        //two classes, get iterated for every day, 2 x 7 = 14 console logs
        // console.log(h + " " + scheduleData[h].schedule)
        const inputString = scheduleData[h].schedule;
        //same as above, logs 14 times
        // console.log(inputString)
        // input string = Mon Wed Fri // Tue Thurs
        const splitResult = inputString.split(/\s+/);
        //split result logs 14 times, alternating ['Mon', 'Wed', 'Fri'] || ['Tue', 'Thurs']
        // console.log(splitResult)
        for (let i = 0; i < splitResult.length; i++) {
            if (dayLetter === "R" && splitResult[i][3] === "r") {
                classesPerDay.push(scheduleData[h].name);
                break;
            } else if (dayLetter === "T" && splitResult[i][1] === "u") {
                classesPerDay.push(scheduleData[h].name);
                break;
            }
            else if (dayLetter === splitResult[i][0]) {
                classesPerDay.push(scheduleData[h].name);
                break;
            }
        }
    }

    return classesPerDay.length > 0 ? classesPerDay : false;
}

function checkIndividualClassDay(dayLetter: string, schedule: string, className: string) {
    const inputString = schedule;
    const splitResult = inputString.split(/\s+/);
    const classResultString = `${className} @ 11 - 12pm`;

    for (let i = 0; i < splitResult.length; i++) {
        if (dayLetter === "R" && splitResult[i][3] === "r") {
            // classesPerDay.push(schedule);
            return classResultString;
        } else if (dayLetter === "T" && splitResult[i][1] === "u") {
            // classesPerDay.push(schedule);
            return classResultString;
        } else if (dayLetter === splitResult[i][0]) {
            // classesPerDay.push(schedule);
            return classResultString;
        }
    }

    return "---";
}

const DayCard = ({ day, classData, classNameInfo, classToRegister }: DayCardProps) => {
    // console.log(classToRegister ? checkIndividualClassDay(day, classToRegister.schedule) : "something went wrong")
    return (
        <div className="flex flex-col mx-1 items-center justify-center min-w-[200px] h-44 bg-white rounded-2xl">
            <p className="text-4xl pb-3 text-DarkPurp">{day}</p>
            {
                classToRegister ? <p>{checkIndividualClassDay(day, classToRegister.schedule, classToRegister.name)}</p> : <p>---</p>
            }
            {/* {Array.isArray(classNameInfo) ? (
                classNameInfo.map((classItem, index) => (
                    <p key={index}>{classItem}</p>
                ))
            ) : (
                <p>---</p>
            )} */}
        </div>
    )
}

export default function ResultsScheduleElement({ scheduleData, classToRegister }: { scheduleData: ScheduleData[], classToRegister: any }) {
    // console.log(classToRegister)

    return (
        <div className="flex overflow-x-auto drop-shadow-xl px-5">
            {days.map((day, index) => (
                <DayCard
                    key={index}
                    day={day}
                    classData={scheduleData}
                    classNameInfo={
                        checkDay(day, scheduleData)
                    }
                    classToRegister={classToRegister ? classToRegister : false}
                />
            ))}
        </div>
    )
}
