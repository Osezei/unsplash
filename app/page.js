"use client";
import SearchForm from "@/components/SearchForm";
import ThemeToggle from "@/components/ThemeToggle";
import Gallery from "@/components/Gallery";
import { motion, useScroll } from "framer-motion";
export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <main>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="progress-bar"
      ></motion.div>
      <section className="w-[1040px] mx-auto ">
        <ThemeToggle />
        <h3 className="text-center text-4xl font-extrabold underline underline-offset-2">
          Splash images
        </h3>
        <SearchForm />
        <Gallery />
      </section>
    </main>
  );
}
