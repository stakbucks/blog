import {IProject} from '@/service/project';
import Image from 'next/image';

type Props = {
  project: IProject;
  onClick?: (id: string) => void;
};

export default function ProjectPreview({project}: Props) {
  return (
    <div className='w-full max-w-sm h-60 mx-auto rounded-lg border-solid border-2 border-gray grid grid-rows-6  items-center shadow-lg'>
      <div className='row-start-1 row-end-2 text-center '>
        <h1 className='text-xl'>{project.title}</h1>
      </div>
      <div className='row-start-3 row-end-5  w-full flex justify-center items-center'>
        <Image
          alt='프로젝트이미지'
          src={project.img}
          width={200}
          height={200}
          objectFit='cover'
        />
      </div>
      <div className='row-start-6 text-center'>
        <span className='text-m'>{project.description}</span>
      </div>
    </div>
  );
}
