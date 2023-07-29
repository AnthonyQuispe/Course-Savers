"use client";

import Image from "next/image";
import backButtonIcon from "../../../public/icons/back-button-icon.png";
import financesIcon from "../../../public/icons/finances-icon.png";
import { useRouter } from "next/navigation";

export default function Confirm() {
  const router = useRouter();

  return (
    <div className="pt-[44px]">
      <div className="flex items-center justify-between pl-3 pr-5">
        <Image
          src={backButtonIcon}
          alt="back button"
          onClick={() => router.back()}
        />
        <Image className="w-12 h-12" src={financesIcon} alt="finances button" />
      </div>
      <section className="p-6 pt-2 flex flex-col justify-between h-full">
        <h1 className=" text-xl text-PrimaryPurp font-extrabold">
          CONFIRMATION
        </h1>
        <div className="py-[15rem] px-6">
          <h2 className=" text-PrimaryPurp text-lg font-extrabold pb-4">
            You&apos;re Done!
          </h2>
          <p className=" text-lg">
            You&apos;ve successfully finalized your classes for the term.
          </p>
        </div>
        <button className="bg-PrimaryPurp rounded-full w-full p-3 text-white text-xl font-extrabold">
          Check Your Finances
        </button>
      </section>
    </div>
  );
}
