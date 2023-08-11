import {getProjects} from '@/service/project';
import ProjectPreviews from './ProjectPreviews';

export default async function Projects() {
  const projects = await getProjects();
  return (
    <section className='m-10 flex flex-col z-0'>
      <h1 className='text-3xl font-semibold ml-3 mb-3'>Projects</h1>
      <hr className='w-full h-0.5 bg-lime-100 mb-7 ' />
      <ProjectPreviews projects={projects} />
    </section>
  );
}
