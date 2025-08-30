import { memo } from 'react';
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import { useDataProcessing } from "@/utils/useDataProcessing";
import Image from 'next/image';

// Memoized components for better performance
const MemoizedHeader = memo(Header);
const MemoizedHero = memo(Hero);
const MemoizedAbout = memo(About);
const MemoizedWorkExperience = memo(WorkExperience);
const MemoizedSkills = memo(Skills);
const MemoizedProjects = memo(Projects);
const MemoizedContactMe = memo(ContactMe);

export default function Home() {
  const { socials, skills, experiences, projects, pageInfo } = useDataProcessing();

  return (
    <main
      id="mainBody"
      className="bg-[#242424] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-emerald-500/80 scroll-smooth"
    >
      <MemoizedHeader socials={socials} />

      <section id="hero" className="snap-start">
        <MemoizedHero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-start">
        <MemoizedAbout pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-start">
        <MemoizedWorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <MemoizedSkills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <MemoizedProjects projects={projects} />
      </section>

      <section id="contact" className="snap-end">
        <MemoizedContactMe pageInfo={pageInfo} />
      </section>

      <footer className="sticky bottom-5 w-full cursor-pointer">
        <a href="#hero" aria-label="Scroll to top">
          <div className="flex items-center justify-center">
            <Image
              src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-512.png"
              alt="Scroll to top"
              className="h-10 w-10 rounded-full filter hover:brightness-150 cursor-pointer transition-all duration-200"
              width={10}
              height={10}
            />
          </div>
        </a>
      </footer>
    </main>
  );
}