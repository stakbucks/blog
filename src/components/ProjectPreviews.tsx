import {IProject} from '@/service/project';
import ProjectPreview from './ProjectPreview';
import Link from 'next/link';

type Props = {
  projects: IProject[];
};

export default function ProjectPreviews({projects}: Props) {
  return (
    <div className='grid min-[1150px]:grid-cols-3  min-[826px]:grid-cols-2 sm:grid-cols-1 gap-x-5 gap-y-3 '>
      {projects.map(project => (
        <Link href={`/project/${project.id}`}>
          <ProjectPreview project={project} key={project.id} />
        </Link>
      ))}
    </div>
  );
}
