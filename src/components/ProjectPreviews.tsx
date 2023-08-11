import Carousel from 'react-multi-carousel';
import {IProject} from '@/service/project';
import ProjectPreview from './ProjectPreview';
import Link from 'next/link';
import MultiCarousel from './MultiCarousel';

type Props = {
  projects: IProject[];
};

export default function ProjectPreviews({projects}: Props) {
  return (
    <MultiCarousel>
      {projects.map(project => (
        <Link href={`/project/${project.id}`}>
          <ProjectPreview project={project} key={project.id} />
        </Link>
      ))}
    </MultiCarousel>
  );
}
