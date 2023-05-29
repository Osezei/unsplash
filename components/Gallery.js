"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { useGlobalContext } from "@/context/context";
import { motion } from "framer-motion";
const url =
  "https://api.unsplash.com/search/photos?client_id=Q_3imc_wKJtriGE6elrgnEmzbnYuxQQ89VfASylyyPQ";

const Gallery = () => {
  const { searchTerm } = useGlobalContext();
  const response = useQuery({
    queryKey: ["images", searchTerm],
    queryFn: async () => {
      const result = await axios.get(`${url}&query=${searchTerm}`);
      return result.data;
    },
  });
  //console.log(response);
  if (response.isLoading) {
    return (
      <section>
        <p className="font-semibold text-3xl text-center pt-10">Loading...</p>
      </section>
    );
  }
  if (response.isError) {
    return (
      <section>
        <p className="font-semibold text-3xl text-center pt-10">
          something went wrong
        </p>
      </section>
    );
  }
  const results = response.data.results;
  if (results.length < 1) {
    return (
      <section className="">
        <p className="font-semibold text-3xl text-center pt-10">
          No images found
        </p>
      </section>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className="pt-4 grid grid-cols-2 gap-4 place-items-center"
    >
      {results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <Image
            src={url}
            key={item.id}
            alt={item.alt_description}
            width={500}
            height={250}
            className="overflow-hidden w-[500px] h-[250px] object-cover"
            priority
          />
        );
      })}
    </motion.section>
  );
};

export default Gallery;
