interface SanityBody {
  // _createdAt: string;
  // _rev: string;
  _id: string;
  // _updatedAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";
  address: string;
  backgroundInformation: string;
  email: string;
  role: string;
  heroImage: string;
  name: string;
  phoneNumber: string;
  profilePic: string;//Image;
}

export interface Technology extends SanityBody {
  _type: "skill";
  image: string//Image;
  progress: string;
  title: string;
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: string;//Image;
  progress: string;
  title: string;
}

export interface Experience extends SanityBody {
  _type: "experience";
  company: string;
  dateStarted: date;
  companyImage: Image | string;//Image;
  dateEnded: date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}

export interface Project extends SanityBody {
  _type: "project";
  title: string;
  image: Image | string;//Image;
  linkToBuild: string;
  summary: string;
  technologies: Technology[];
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}