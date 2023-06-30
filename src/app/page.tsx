"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import logo from "../../public/Logo.svg";

import "./home.scss";

export default function Home() {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLogo(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="main">
      <div className="main__background"></div>
      {showLogo && (
        <Image
          className="main__logo"
          src={logo}
          alt="logo image"
          width={200}
          height={200}
        />
      )}
      <p className="main__text">Helping students spend wisely</p>
    </main>
  );
}
