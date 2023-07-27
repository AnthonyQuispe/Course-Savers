'use client'

import Image from "next/image";
import academicMap from "../../../public/Academic_Map.svg";
import searchIcon from "../../../public/SearchIcon.svg";
import bookmarkIcon from "../../../public/Bookmark Component.svg";
import NavComponent from "../../components/navComponent/page";

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

type Semester = {
  id: number,
  name: string,
  campusId: number,
  year: number,
  startDate: string,
  endDate: string,
}

type FormData = {
  term: string,
  course: string
}

async function getTerms(userData: string) {
  const termsArrReq = await fetch(`/api/terms?email=${userData}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  return termsArrReq.json()
}

// async function submitData(formData: FormData) {
//   const request = await fetch(`/api/searchResults?term=${formData.term}&course=${formData.course}`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//   })

//   return request.json()
// }

export default async function Home() {

  const router = useRouter()
  const newSession = useSession();
  const { data: session, status } = newSession

  // console.log(newSession)

  // if (status == "loading") {
  //   console.log('loading')
  // } else if (session) {
  //   console.log('session is good to go')
  //   console.log(session.user?.email)
  // } else if (!session) {
  //   console.log('no session');
  // }

  useEffect(() => {
    if (status !== "authenticated") {
      router.push('/sign-in')
    }
  }, [status])

  const termArrData = await getTerms(session?.user?.email!);

  // console.log(termArrData.data)

  async function handleFormSubmit(e: React.SyntheticEvent) {
    e.preventDefault()
    const form = e.target as HTMLFormElement;
    // Create a new FormData object from the form
    const formData = new FormData(form);
    let reqTerm: string = ""
    let reqCourse = ""
    formData.forEach((value, key) => {
      // console.log(`${key}: ${value} ${typeof value}`);
      if (key === "term") {
        reqTerm = value as string;
      }
      if (key === "course") {
        reqCourse = value as string;
      }
    });

    let searchQuery = {
      term: reqTerm,
      course: reqCourse
    }

    // let response = await submitData(searchQuery)

    // const { classes } = response

    // console.log(classes)
    router.push(`/results/?term=${searchQuery.term}&course=${searchQuery.course}&email=${session?.user?.email!}`)
  }

  return (
    <main className="search bg-BG_Color w-screen h-screen flex items-center justify-center">
      <div className="search__bookmark absolute top-2 right-8 text-DarkPurp flex items-center justify-center flex-col">
        <Image src={bookmarkIcon} alt="bookmark icon" width={40} height={40} />
        <p>Saves</p>
      </div>
      <form className="max-w-[18.75rem] rounded-3xl flex flex-col justify-evenly items-center absolute top-160 rounded-25 w-11/12 h-3/6 shadow-md bg-BG_Color " onSubmit={handleFormSubmit}>
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
          <select className=" h-14 search__dropdown w-73vw  text-DarkGrayTxt bg-InputGray text-20px font-Poppins font-normal rounded-20px p-0.25rem border-none rounded-2xl	px-2" name="term">
            <option value="">Select</option>
            {termArrData.data.map((term: Semester) => {
              return (
                <option key={term.id} value={term.id}>{term.name}</option>
              )
            })}
          </select>
        </div>
        <div className="flex flex-col w-4/5">
          <label className="search__label text-BlackText">Course Number</label>
          <input
            className=" w-73vw h-14 text-DarkGrayTxt bg-InputGray text-20px font-Poppins font-normal rounded-20px p-0.25rem border-none rounded-2xl	px-2"
            type="text"
            placeholder="Course ID"
            name="course"
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

          <button className="rounded-full  search__button bg-PrimaryPurp shadow-md rounded-36px flex items-center justify-center gap-10 text-White font-Poppins font-semibold h-14 w-34vw p-3.25rem border-none text-xl	px-4	" type="submit">
            Search
          </button>
        </div>
      </form>
      <NavComponent />
    </main>
  );
}
