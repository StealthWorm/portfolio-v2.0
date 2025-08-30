import { useMemo } from 'react';
import { Experience, PageInfo, Project, Skill, Social } from '../../typings';

import socialData from '../data/socials.json';
import experiencesData from '../data/experiences.json';
import projectsData from '../data/projects.json';
import skillsData from '../data/skills.json';
import infoData from '../data/info.json';

export const useDataProcessing = () => {
  return useMemo(() => {
    const socials: Social[] = socialData.socials.map(({ _type, ...rest }) => ({
      _type: "social" as const,
      ...rest
    }));

    const skills: Skill[] = skillsData.skills.map(({ _type, ...rest }) => ({
      _type: "skill" as const,
      ...rest
    }));

    // Create a skills lookup map for O(1) access
    const skillsMap = new Map(skills.map(skill => [skill._id, skill]));

    const experiences: Experience[] = experiencesData.experiences.map(({ _type, technologies, ...rest }) => ({
      _type: "experience" as const,
      technologies: technologies.map(id => skillsMap.get(id)).filter(Boolean) as Skill[],
      ...rest
    }));

    const projects: Project[] = projectsData.projects.map(({ _type, technologies, ...rest }) => ({
      _type: "project" as const,
      technologies: technologies.map(id => skillsMap.get(id)).filter(Boolean) as Skill[],
      ...rest
    }));

    const pageInfo: PageInfo = { ...infoData.result, _type: "pageInfo" as const };

    return { socials, skills, experiences, projects, pageInfo };
  }, []);
};
