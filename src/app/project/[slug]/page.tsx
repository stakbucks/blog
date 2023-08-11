import {getProject, getProjects} from '@/service/project';
import ProjectNotFound from '../not-found';

type Props = {
  params: {
    slug: string;
  };
};

export default async function ProjectPage({params: {slug}}: Props) {
  const project = await getProject(slug);
  if (!project) return ProjectNotFound();
  return <h1 className='text-2xl'>{project?.title}</h1>;
}
export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map(project => {
    params: {
      slug: project.id;
    }
  });
}
