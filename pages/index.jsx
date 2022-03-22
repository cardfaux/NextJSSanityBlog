import { useState } from 'react';

import { Row, Button } from 'react-bootstrap';
import PageLayout from 'components/Layouts/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import FilteringMenu from 'components/FilteringMenu';
import PreviewAlert from 'components/PreviewAlert';

import { useGetBlogsPages } from 'actions/pagination';
import { getPaginatedBlogs, getFeaturedProjects, getFeaturedBlogs } from 'lib/api';

import { Col } from 'react-bootstrap';
import CardItem from 'components/CardItem';
import AboveFold from 'components/Homepage/AboveFold/AboveFold';
import WhatWeDo from 'components/Homepage/WhatWeDo/WhatWeDo';
import OurWorks from 'components/Homepage/OurWorks/OurWorks';
import TestimonialsSection from 'components/Homepage/Testimonials/Testimonials';
import FeaturedBlogSection from 'components/Homepage/FeaturedBlog/FeaturedBlog';
import CardItemBlank from 'components/CardItemBlank';
import CardListItem from 'components/CardListItem';
import CardListItemBlank from 'components/CardListItemBlank';
import moment from 'moment';

export const BlogList = ({ data = [], filter }) => {
  return data.map((page) =>
    page.map((blog) =>
      filter.view.list ? (
        <Col key={`${blog.slug}-list`} md='9'>
          <CardListItem
            author={blog.author}
            title={blog.title}
            subtitle={blog.subtitle}
            date={moment(blog.date).format('LL')}
            link={{
              href: '/blogs/[slug]',
              as: `/blogs/${blog.slug}`,
            }}
          />
        </Col>
      ) : (
        <Col key={blog.slug} lg='4' md='6'>
          <CardItem
            author={blog.author}
            title={blog.title}
            subtitle={blog.subtitle}
            date={moment(blog.date).format('LL')}
            image={blog.coverImage}
            link={{
              href: '/blogs/[slug]',
              as: `/blogs/${blog.slug}`,
            }}
          />
        </Col>
      )
    )
  );
};

export default function Home({ blogs, preview, projects, featuredBlogs }) {
  const [filter, setFilter] = useState({
    view: { list: 0 },
    date: { asc: 0 },
  });

  const { data, size, setSize, hitEnd } = useGetBlogsPages({ filter });
  // TO DO: I am recieving the featured projects data here, data needs passed to the FeaturedBlogSection
  return (
    <PageLayout>
      {preview && <PreviewAlert />}
      <AboveFold />
      <WhatWeDo />
      <OurWorks projects={projects} />
      <TestimonialsSection />
      <FeaturedBlogSection featuredBlogs={featuredBlogs} />
      <AuthorIntro />
      <FilteringMenu
        filter={filter}
        onChange={(option, value) => setFilter({ ...filter, [option]: value })}
      />
      <hr />
      <Row className='mb-5'>
        <BlogList data={data || [blogs]} filter={filter} />
      </Row>
      <div style={{ textAlign: 'center' }}>
        <Button
          onClick={() => setSize(size + 1)}
          disabled={hitEnd}
          size='lg'
          variant='outline-secondary'
        >
          {/* {isLoadingMore ? '...' : isReachingEnd ? 'No more blogs' : 'More Blogs'} */}
          {/* Load More */}
          {hitEnd ? 'No more blogs' : 'More Blogs'}
        </Button>
      </div>
    </PageLayout>
  );
}

// this function is ran during the build (build time)
// Provides props to your page
// It will create a stati cpage
export async function getStaticProps({ preview = false }) {
  const blogs = await getPaginatedBlogs({ offset: 0, date: 'desc' });
  const projects = await getFeaturedProjects();
  const featuredBlogs = await getFeaturedBlogs();
  return {
    props: {
      blogs,
      preview,
      projects,
      featuredBlogs,
    },
    revalidate: 1,
  };
}
