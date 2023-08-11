import Image from 'next/image';
import profileImg from '../../public/images/taehwan.jpg';
import Link from 'next/link';
import githubLogo from '../../public/images/github.png';
import velogLogo from '../../public/images/velog.png';

const GITHUB_LINK = 'https://github.com/stakbucks';
const VELOG_LINK = 'https://velog.io/@stakbucks';

export default function Hero() {
  return (
    <section className='mt-10 grid grid-cols-2 gap-12'>
      <div className='flex items-center justify-end'>
        <Image
          alt='프로필사진'
          src={profileImg}
          width={220}
          height={220}
          priority
        />
      </div>
      <div className='lg:py-3 flex flex-col justify-between'>
        <div className='flex flex-col gap-1 '>
          <h1 className='lg:text-5xl sm:text-3xl text-xl lg:font-medium font-bold'>
            {'황태환'}
          </h1>
          <h2 className='lg:text-lg md:text-base text-sm leading-none'>
            {'Frontend Developer'}
          </h2>
          <h3 className='text-sm font-light'>
            {'안녕하세요. 문제해결형 개발자 황태환입니다.'}
          </h3>
        </div>
        <ul className='flex gap-5 items-center'>
          <li>
            <Link href={GITHUB_LINK}>
              <Image alt='깃허브 로고' src={githubLogo} width={45} />
            </Link>
          </li>
          <li>
            <Link href={VELOG_LINK}>
              <Image alt='깃허브 로고' src={velogLogo} width={35} />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
