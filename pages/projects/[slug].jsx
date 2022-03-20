import PageLayout from '../../components/Layouts/PageLayout';
import BlogHeader from 'components/BlogHeader';
import { getProjectBySlug, getAllProjects } from 'lib/api';
import { Row, Col } from 'react-bootstrap';

const ProjectDetail = ({ project }) => {
  return (
    <PageLayout className='blog-detail-page'>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <BlogHeader
            title={project.projectTitle}
            subtitle={project.projectSubtitle}
            coverImage={project.coverImage}
            // author={project.author}
            date={project.date}
          />
          <hr />
          {/* Blog Content Here */}
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of using
          Lorem Ipsum is that it has a more-or-less normal distribution of letters,
          as opposed to using 'Content here, content here', making it look like
          readable English. Many desktop publishing packages and web page editors now
          use Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
          will uncover many web sites still in their infancy. Various versions have
          evolved over the years, sometimes by accident, sometimes on purpose
          (injected humour and the like).
        </Col>
      </Row>
    </PageLayout>
  );
};

export async function getStaticProps({ params }) {
  const project = await getProjectBySlug(params.slug);
  return {
    props: { project },
  };
}

export async function getStaticPaths() {
  const projects = await getAllProjects();
  return {
    paths: projects?.map((project) => {
      return { params: { slug: project.slug } };
    }),
    fallback: false,
  };
}

export default ProjectDetail;
