import Image from "next/image"
import backButtonIcon from "../../../public/icons/back-button-icon.png";
import filterIcon from "../../../public/icons/filter-icon.png";


export default function Results() {
    return <div className="p-4 pt-[44px]">
        <div className="flex justify-between">
            <Image src={backButtonIcon} alt="back button"/>
            <Image src={filterIcon} alt="filter button"/>
        </div>
        <p className=" text-PrimaryPurp underline pl-2 font-bold">My Schedule</p>
        <div></div>
    </div>
}