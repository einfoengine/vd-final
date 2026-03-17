export interface ProjectSection {
  heading: string;
  content: string[];
  list?: string[];
  images?: string[];
}

export interface ProjectType {
  id: number;
  title: string;
  slug: string;
  company: string;
  category: string;
  liveview: string;
  timelines: string;
  service: string[];
  keywords: string[];
  coverImage: string;
  sections: ProjectSection[];
}

export default ProjectType;


