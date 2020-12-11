import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import CardItem from 'components/CardItem';
// import CardListItem from 'components/CardListItem';

import { getAllBlogs } from 'lib/api';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home({ blogs }) {
  return (
    <PageLayout>
      <Title>My First Next.js Page</Title>
      <AuthorIntro />
      <hr />
      <Row className='mb-5'>
        {/* <Col md="10">
          <CardListItem />
        </Col> */}
        {blogs.map((blog) => (
          <Col key={blog.slug} md='4'>
            <CardItem
              author={blog.author}
              title={blog.title}
              subtitle={blog.subtitle}
              date={blog.date}
              image={blog.coverImage}
            />
          </Col>
        ))}
      </Row>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const randomNumber = Math.random();
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs,
      randomNumber,
    },
  };
}
