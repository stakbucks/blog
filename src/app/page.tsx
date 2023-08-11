import Hero from '@/components/Hero';
import Projects from '@/components/Projects';

export default async function HomePage() {
  return (
    <main className='px-10 w-full h-full'>
      <Hero />
      <Projects />
    </main>
  );
}
