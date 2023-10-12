import NavBar from "@/components/NavBar/NavBar";
import Section from "@/components/Section/Section";
import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-[100px]">
      <h1>main page</h1>
      {/* <NavBar /> */}
      <Section projectId={1}/>
    </main>
  );
}
