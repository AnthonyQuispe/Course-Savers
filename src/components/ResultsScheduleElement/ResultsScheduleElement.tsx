
const DayCard = ({ day }: { day: string }) => (
    <div className="flex flex-col mx-1 items-center justify-center min-w-[200px] h-44 bg-white rounded-2xl">
        <p className="text-4xl pb-3 text-DarkPurp">{day}</p>
        <p className="text-BlackText">---</p>
        <p className="text-BlackText">---</p>
    </div>
)

export default function ResultsScheduleElement() {
    const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

    return (
        <div className="flex overflow-x-auto drop-shadow-xl px-5">
            {days.map((day, index) => (
                <DayCard key={index} day={day} />
            ))}
        </div>
    )
}
