import { Row, Col } from 'react-bootstrap';
import PageLayout from '../../components/Layouts/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import ProjectsCardItem from '../../components/ProjectsPage/ProjectsCardItem';
import CardListItem from 'components/CardListItem';

import { getAllProjects } from 'lib/api';

export default function Home({ projects }) {
  return (
    <PageLayout>
      {/* <AuthorIntro /> */}
      <hr />
      <Row className='mb-5'>
        {/* <Col md='10'>
          <CardListItem />
        </Col> */}
        {projects.map((project) => {
          return (
            <Col key={project.slug} md='4'>
              <ProjectsCardItem
                projectTitle={project.projectTitle}
                projectSubtitle={project.projectSubtitle}
                date={project.date}
                image={project.coverImage}
                link={{
                  href: '/projects/[slug]',
                  as: `/projects/${project.slug}`,
                }}
              />
            </Col>
          );
        })}
      </Row>
    </PageLayout>
  );
}

// This function is called during the build (build time)
// Provides props to your page
// It will create static page
export async function getStaticProps() {
  const projects = await getAllProjects();
  return {
    props: {
      projects,
    },
  };
}
