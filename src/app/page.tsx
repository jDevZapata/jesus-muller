import Presentation from "@/app/components/presentation/Presentation";
import Experience from "@/app/components/experience/Experience";
import Education from "@/app/components/education/Education";
import Technologies from "@/app/components/technologies/Technologies";
import Contact from "@/app/components/contact/Contact";

export default function Home() {
  return (
    <main>
      <Presentation />
      <Experience />
      <Education />
      <Technologies />
      <Contact />
    </main>
  );
}
