import Hero from "@/components/Sections/Hero";
import PasswordGenerate from "@/components/Sections/PasswordGenerate";
export default function Home() {
  return (
    <>
      <main className="w-screen h-screen">
        <Hero/>
        <PasswordGenerate/>
      </main>
    </>
  );
}
