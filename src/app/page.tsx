"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/Logo.svg";

import "./home.scss";

export default function Home() {
  // const [showContent, setShowContent] = useState(false);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setShowContent(true);
  //   }, 20000); // Set the desired timeout duration in milliseconds

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, []);

  // if (!showContent) {
  //   return null; // Render nothing during the false timeout
  // }

  return (
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
  );
}
