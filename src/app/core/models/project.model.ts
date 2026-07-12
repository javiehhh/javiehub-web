import { Technology } from "./technology.model";

export interface Project{
    title: string;
    description: string;
    technologies: string[];
    github: string;
    demo: string;
}