"use client";
import React from "react";
import { useGlobalContext } from "@/context/context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchTerm(searchValue);
    //console.log(searchValue);
  };
  return (
    <section className="my-6 flex justify-center">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Search photos on splash"
          className="w-[500px] h-[40px] rounded-l-3xl text-center text-black font-semibold text-lg"
        />
        <button
          type="submit"
          className="bg-green-700 h-[40px] w-[100px] rounded-r-3xl font-semibold capitalize text-lg"
        >
          search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
