"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/Logo.svg";
import Link from "next/link";

export default function Home() {
  return (
    // <Link href="/search">
    <main className="relative flex justify-center items-center h-screen">
      <video
        width="100vw"
        height="100vh"
        className="w-screen h-screen"
        autoPlay
        muted
        loop
      >
        <source src="/Course-Saver-Background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-purple-700 bg-opacity-75"></div>
      <div className="absolute z-10 flex flex-col items-center ">
        <Image
          className="w-11/12 h-auto"
          src={logo}
          alt="logo image"
          width={200}
          height={200}
        />
        <p className="text-white text-1xl font-normal font-poppins text-center mt-4 ">
          Helping students spend wisely
        </p>
      </div>
    </main>
    // </Link>
  );
}
