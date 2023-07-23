import Image from "next/image"
import backButtonIcon from "../../../public/icons/back-button-icon.png";
import filterIcon from "../../../public/icons/filter-icon.png";
import ResultsScheduleElement from "../components/ResultsScheduleElement/ResultsScheduleElement";


export default function Results() {
    return <div className="pt-[44px]">
        <div className="flex justify-between px-3">
            <Image src={backButtonIcon} alt="back button"/>
            <Image src={filterIcon} alt="filter button"/>
        </div>
        <p className=" text-PrimaryPurp underline pl-6 pb-3 font-bold">My Schedule</p>
        <div>
            <ResultsScheduleElement />
        </div>
    </div>
}