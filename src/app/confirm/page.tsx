'use client'

import Image from "next/image";
import backButtonIcon from "../../../public/icons/back-button-icon.png";
import financesIcon from "../../../public/icons/finances-icon.png";

export default function Confirm() {

    return (
        <div className="pt-[44px]">
            <div className="flex items-center justify-between pl-3 pr-5">
                <Image src={backButtonIcon} alt="back button" onClick={() => router.back()} />
                <Image className="w-12 h-12" src={financesIcon} alt="finances button" />
            </div>
            <section className="p-6 pt-2">
                
            </section>
            <section className="px-6">
                <button className="bg-PrimaryPurp rounded-full w-full p-3 text-white text-xl font-extrabold">Check Your Finances</button>
            </section>
        </div>
    )
}