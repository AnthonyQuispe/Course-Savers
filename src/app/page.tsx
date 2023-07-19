"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/Logo.svg";
import Link from "next/link";

export default function Home() {
  return (
    <Link href="/search">
      <main className="relative flex justify-center items-center h-screen">
        <div className="absolute inset-0 bg-purple-700 bg-opacity-75"></div>
        <div className="absolute z-10">
          <Image
            className="w-3/4 h-auto"
            src={logo}
            alt="logo image"
            width={200}
            height={200}
          />
          <p className="text-white text-5xl font-normal font-poppins">
            Helping students spend wisely
          </p>
        </div>
      </main>
    </Link>
  );
}
