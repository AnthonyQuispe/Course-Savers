'use client'

import Image from "next/image";
import backButtonIcon from "../../../public/icons/back-button-icon.png";
import financesIcon from "../../../public/icons/finances-icon.png";
import infoIcon from "../../../public/icons/info-icon.png";
import trashIcon from "../../../public/icons/trash-icon.png";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

async function getClassData(classId: number) {
    const request = await fetch(`/api/getClassInfo?classId=${classId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    return request.json()
}

export default function CheckOut() {

    const router = useRouter();
    const searchParams = useSearchParams()

    const getClassId = searchParams.get('classId') ?? ''

    useEffect(() => {
        getClassData(Number(getClassId))
    }, [])

    return (
        <div className="pt-[44px]">
            <div className="flex items-center justify-between pl-3 pr-5">
                <Image src={backButtonIcon} alt="back button" onClick={() => router.back()} />
                <Image className="w-12 h-12" src={financesIcon} alt="finances button" />
            </div>
            <section className="p-6 pt-2">
                <p className=" pb-4 text-DarkPurp text-xl font-extrabold">CART</p>
                <article className="rounded-3xl shadow-lg">
                    <div className="bg-GrayPurp flex items-center justify-between p-4 rounded-t-3xl">
                        <h2 className="text-xl font-extrabold">NURS 101</h2>
                        <Image src={infoIcon} alt="More info button" />
                    </div>
                    <div className="flex items-center p-4 leading-7">
                        <Image src={trashIcon} alt="delete button" />
                        <div className="mx-4 font-medium">
                            <p>Dates:</p>
                            <p>When:</p>
                            <p>Instructor:</p>
                            <p>Cost:</p>
                        </div>
                        <div className=" font-light">
                            <p>06/19-07/18</p>
                            <p>M, W @ 11a-12p</p>
                            <p>Dr. Thornberry</p>
                            <p>$400</p>
                        </div>
                    </div>
                </article>
            </section>
            <section className="px-6">
                <h2 className=" text-xl font-medium pt-3 pb-2">Course Costs</h2>
                <hr className=" text-GrayDivider"></hr>
                <div className="flex leading-10 justify-between pt-6 pl-4 pr-6 pb-6">
                    <div className=" font-medium text-right">
                        <p>Sub Total</p>
                        <p>Taxes</p>
                        <p className=" font-bold">Total Cost</p>
                        <div className="flex items-center justify-end">
                            <Image src={infoIcon} alt="credits in cart info button" />
                            <p className="ml-3">Credits In Cart</p>
                        </div>
                        <div className="flex items-center justify-end">
                            <Image src={infoIcon} alt="awards used info button" />
                            <p className="ml-3">Awards Used</p>
                        </div>
                    </div>
                    <div className=" font-light text-right">
                        <p>$400</p>
                        <p>$28</p>
                        <p>$428</p>
                        <p>3 / 60</p>
                        <p>$400 / $1.6k</p>
                    </div>
                </div>
                <button onClick={() => router.push('/confirm')} className="bg-PrimaryPurp rounded-full w-full p-3 text-white text-xl font-extrabold">Finalize $428</button>
            </section>
        </div>
    )
}