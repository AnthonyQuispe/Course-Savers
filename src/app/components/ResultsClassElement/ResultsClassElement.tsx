import Image from "next/image";
import downArrowIcon from "../../../../public/icons/down-arrow-icon.png";
import upArrowIcon from "../../../../public/icons/up-arrow-icon.png";
import infoIcon from "../../../../public/icons/info-icon.png";


export default function ResultsClassElement() {
    return (
        <div>
            <div className=" items-center justify-between px-6 flex bg-GrayPurp">
                <div className="flex items-center">
                    <h2 className=" text-xl font-semibold">NURS 101</h2>
                    <Image src={downArrowIcon} alt="drop down arrow" />
                </div>
                <div className="flex items-center">
                    <Image className="w-5 h-5" src={infoIcon} alt="info button" />
                    <h2 className=" pl-8 text-DarkPurp underline font-extrabold">Add</h2>
                </div>
            </div>
            <div className=" opacity-40 items-center justify-between px-6 flex bg-GrayPurp">
                <div className="flex items-center">
                    <h2 className=" text-xl font-semibold">NURS 101</h2>
                    <Image src={downArrowIcon} alt="drop down arrow" />
                </div>
                <div className="flex items-center">
                    <Image className="w-5 h-5" src={infoIcon} alt="info button" />
                    <h2 className=" pl-8 underline font-extrabold">Add</h2>
                </div>
            </div>
            <div className=" opacity-40 items-center justify-between px-6 flex bg-GrayPurp">
                <div className="flex items-center">
                    <h2 className=" text-xl font-semibold">NURS 101</h2>
                    <Image src={downArrowIcon} alt="drop down arrow" />
                </div>
                <div className="flex items-center">
                    <Image className="w-5 h-5" src={infoIcon} alt="info button" />
                    <h2 className=" pl-8 underline font-extrabold">Add</h2>
                </div>
            </div>
        </div>
    )
}