import { Experience } from "../../typings";

export const fetchExperiences = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperiences`, { next: { revalidate: 30 } });
  const data = await res.json();
  const experiences: Experience[] = data.experiences;

  // console.log("fetching", experiences);

  return experiences;
}