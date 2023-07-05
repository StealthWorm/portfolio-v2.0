import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import { Experience, PageInfo, Project, Skill, Social } from "../../typings";
import { fetchSocials } from "@/utils/fetchSocials";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchExperiences } from "@/utils/fetchExperiences";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchProjects } from "@/utils/fetchProjects";

import socialData from '../data/socials.json';
import experiencesData from '../data/experiences.json';
import projectsData from '../data/projects.json';
import skillsData from '../data/skills.json';
import infoData from '../data/info.json';

export default function Home() {
  // const pageInfo: PageInfo = await fetchPageInfo();
  // const experiences: Experience[] = await fetchExperiences();
  // const skills: Skill[] = await fetchSkills();
  // const projects: Project[] = await fetchProjects();
  // const socials: Social[] = await fetchSocials();

  const socials: Social[] = socialData.socials.map(({ _type, ...rest }) => ({
    _type: "social",
    ...rest
  }));

  const skills: Skill[] = skillsData.skills.map(({ _type, ...rest }) => ({
    _type: "skill",
    ...rest
  }));

  const experiences: Experience[] = experiencesData.experiences.map(({ _type, technologies, ...rest }) => ({
    _type: "experience",
    technologies: skills.filter((skill) => technologies.includes(skill._id)),
    ...rest
  }));

  const projects: Project[] = projectsData.projects.map(({ _type, technologies, ...rest }) => ({
    _type: "project",
    technologies: skills.filter((skill) => technologies.includes(skill._id)),
    ...rest
  }));

  const pageInfo: PageInfo = { ...infoData.result, _type: "pageInfo" };

  return (
    <main id="mainBody" className="bg-[#242424] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-emerald-500/80 scroll-smooth">      |
      {/* <h1 className='text-slate-50/10 font-valorax absolute items-center justify-center border w-auto  flex text-8xl  uppercase tracking-[15px]'>TESTE FONTE VALORAX</h1> */}
      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>

      <footer className="sticky bottom-5 w-full cursor-pointer">
        <a href="#hero">
          <div className="flex items-center justify-center">
            <img src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-up-01-512.png" alt="" className="h-10 w-10 rounded-full filter  hover:brightness-150 cursor-pointer transition-all duration-200" />
          </div>
        </a>
      </footer>
    </main>
  )
}