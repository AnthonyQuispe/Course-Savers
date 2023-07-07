"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/Logo.svg";
import Link from "next/link";

import "./home.scss";

export default function Home() {
  return (
    <Link href="/search">
      {" "}
      <main className="main">
        <div className="main__background"></div>
        <div className="main__container">
          {" "}
          <Image
            className="main__logo"
            src={logo}
            alt="logo image"
            width={200}
            height={200}
          />
          <p className="main__text">Helping students spend wisely</p>
        </div>
      </main>
    </Link>
  );
}
