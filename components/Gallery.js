"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { useGlobalContext } from "@/context/context";

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
        <p>Loading...</p>
      </section>
    );
  }
  if (response.isError) {
    return (
      <section>
        <p>something went wrong</p>
      </section>
    );
  }
  const results = response.data.results;
  if (results.length < 1) {
    return (
      <section>
        <p>No images found</p>
      </section>
    );
  }

  return (
    <section>
      {results.map((item) => {
        const url = item?.urls?.regular;
        return (
          <Image
            src={url}
            key={item.id}
            alt={item.alt_description}
            width={500}
            height={500}
            className="overflow-hidden w-[500px] h-[500px]"
            priority
          />
        );
      })}
    </section>
  );
};

export default Gallery;
