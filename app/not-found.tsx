<<<<<<< HEAD
import Link from '@/components/Link';
import SectionContainer from '@/components/SectionContainer';

// TODO: Comment out when https://github.com/vercel/next.js/issues/50566 is fixed.

// export const metadata = {
//   title: '404 - Frank Omondi',
//   description: 'Not Found - Frank Omondi',
// };
=======
import SectionContainer from 'app/components/layouts/section-container';
import Link from 'next/link';
>>>>>>> 19eaa5af46a9ecf1ad24aaf91d3ef6afbafb6083

export default function FourZeroFour() {
  return (
    <SectionContainer>
      <div className="h-[calc(100vh-268px)] flex flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl sm:leading-none md:text-6xl">
          404
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Looks like you&apos;re lost.
        </p>
        <Link href="/" className="underline-magical">
          Go back home
        </Link>
      </div>
    </SectionContainer>
  );
}
