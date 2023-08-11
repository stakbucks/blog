import {getProjects} from '@/service/project';

export default async function ProjectPage() {
  const projects = await getProjects();
  return <div>![sd](https://velog.io/)</div>;
}
