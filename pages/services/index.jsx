import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';

import { servicesList } from '../../store/services';
import PageLayout from '../../components/Layouts/PageLayout';

// const files = fs.readdirSync('services');

// const posts = files.map((fileName) => {
//   const slug = fileName.replace('.md', '');
//   const readFile = fs.readFileSync(`services/${fileName}`, 'utf-8');
//   const { data: frontmatter } = matter(readFile);

//   return {
//     slug,
//     frontmatter,
//   };
// });

export default function ServicesPage({ servicesListLists, posts }) {
  return (
    <PageLayout>
      <h1>services page</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0'>
        {posts.map(({ slug, frontmatter }) => (
          <div
            key={slug}
            className='border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col'
          >
            <Link href={`/services/${slug}`}>
              <a>
                <Image
                  width={650}
                  height={340}
                  alt={frontmatter.title}
                  src={`/${frontmatter.socialImage}`}
                />
                <h1 className='p-4'>{frontmatter.title}</h1>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync('store/mdFiles/services');

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`store/mdFiles/services/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      servicesListLists: servicesList,
      posts,
    },
  };
};
