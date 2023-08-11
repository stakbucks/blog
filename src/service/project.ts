import {readFile} from 'fs/promises';
import path from 'path';

export interface IProject {
  id: string;
  title: string;
  img: string;
  description: string;
}

export function getProjects(): Promise<IProject[]> {
  const filePath = path.join(process.cwd(), 'data', 'projects.json');
  return readFile(filePath, 'utf-8').then(JSON.parse);
}

export async function getProject(id: string): Promise<IProject | null> {
  const projects = await getProjects();
  const project = projects.find(project => project.id === id);
  console.log(id);
  console.log(projects[0].id === id);
  if (!project) return null;
  return project;
}
