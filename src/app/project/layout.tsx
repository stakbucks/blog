import {getProjects} from '@/service/project';

export default function ProjectLayout({children}: {children: React.ReactNode}) {
  return <div className='w-full h-full opacity-20 bg-slate-50'>{children}</div>;
}
