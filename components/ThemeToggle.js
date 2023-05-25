"use client";
import React from "react";
import { useGlobalContext } from "@/context/context";

const ThemeToggle = () => {
  const { greeting } = useGlobalContext();
  console.log(greeting);
  return <div>ThemeToggle</div>;
};

export default ThemeToggle;
