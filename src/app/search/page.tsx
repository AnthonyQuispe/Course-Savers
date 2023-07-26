'use client'

import Image from "next/image";
import academicMap from "../../../public/Academic_Map.svg";
import searchIcon from "../../../public/SearchIcon.svg";
import bookmarkIcon from "../../../public/Bookmark Component.svg";
import NavComponent from "../../components/navComponent/page";

import { useSession } from "next-auth/react"

export default async function Home() {

  const newSession = await useSession();
  const { data: session, status } = newSession

  console.log(newSession)

  if (status == "loading") {
    console.log('loading')
  } else if (session) {
    console.log('session is good to go')
  } else if (!session) {
    console.log('no session');

  }

  return (
    <main className="search bg-BG_Color w-screen h-screen flex items-center justify-center">
      <div className="search__bookmark absolute top-2 right-8 text-DarkPurp flex items-center justify-center flex-col">
        <Image src={bookmarkIcon} alt="bookmark icon" width={40} height={40} />
        <p>Saves</p>
      </div>

      <div className="max-w-[18.75rem] rounded-3xl flex flex-col justify-evenly items-center absolute top-160 rounded-25 w-11/12 h-3/6 shadow-md bg-BG_Color ">
        <div className=" w-full flex justify-evenly items-end px-4">
          <h1 className=" text-DarkPurp text-screen-titles font-bold text-2xl">
            QUICK SEARCH
          </h1>
          <Image
            className="search__map w-1/4 h-4/5"
            src={academicMap}
            alt="academic map"
            width={30}
            height={30}
          />
        </div>
        <div className="flex flex-col w-4/5">
          <label className="search__label text-BlackText">Term</label>
          <select className=" h-14 search__dropdown w-73vw  text-DarkGrayTxt bg-InputGray text-20px font-Poppins font-normal rounded-20px p-0.25rem border-none rounded-2xl	">
            <option value="">Select</option>
            <option value="Fall">Fall</option>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
          </select>
        </div>
        <div className="flex flex-col w-4/5">
          <label className="search__label text-BlackText">Course Number</label>
          <input
            className=" w-73vw h-14 text-DarkGrayTxt bg-InputGray text-20px font-Poppins font-normal rounded-20px p-0.25rem border-none rounded-2xl	"
            type="text"
            placeholder=""
          />
        </div>

        <div className="w-4/5	 flex items-center justify-center	">
          <div className="search-container__advanced opacity-10 flex items-center">
            <p className=" text-BlackText font-Poppins text-5vw font-normal">
              Advanced
            </p>
            <Image
              className="search-container__icon"
              src={searchIcon}
              alt="Search Icon"
              width={48}
              height={48}
            />
          </div>

          <button className="rounded-full  search__button bg-PrimaryPurp shadow-md rounded-36px flex items-center justify-center gap-10 text-White font-Poppins font-semibold h-14 w-34vw p-3.25rem border-none text-xl	px-4	">
            Search
          </button>
        </div>
      </div>
      <NavComponent />
    </main>
  );
}
