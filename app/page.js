import SearchForm from "@/components/SearchForm";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main>
      <section className="w-[1040px] mx-auto">
        <ThemeToggle />
        <h3 className="text-center text-4xl font-extrabold underline underline-offset-2">
          Splash images
        </h3>
        <SearchForm />
      </section>
    </main>
  );
}
