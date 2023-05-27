"use client";
import React from "react";
import { useGlobalContext } from "@/context/context";
import { BsFillMoonFill } from "react-icons/bs";
import { RiSunLine } from "react-icons/ri";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

  return (
    <section className="flex justify-end py-4 text-2xl">
      <button onClick={toggleDarkTheme} className="">
        {isDarkTheme ? <BsFillMoonFill /> : <RiSunLine />}
      </button>
    </section>
  );
};

export default ThemeToggle;
