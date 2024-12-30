import MainLayout from '../components/layouts/main-layout';
import { BlogPosts } from '../components/posts';
import { getBlogPosts } from './utils';

export const metadata = {
  title: 'Blog - Frank Omondi',
  description: 'My Blogs - Frank Omondi',
};

export default function Page() {
  const posts = getBlogPosts();

  return (
    <MainLayout>
      <section>
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
          Blog
        </h1>
        <BlogPosts posts={posts} />
      </section>
    </MainLayout>
  );
}
