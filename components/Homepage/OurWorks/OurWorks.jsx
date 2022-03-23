import NewCardItem from '../NewCardItem';
import { OurWorksSection } from './OurWorksStyles';
import PhoenixEgg from '../PhoenixEgg';

const OurWorks = ({ projects }) => {
  return (
    <OurWorksSection className='our--works'>
      <h1>our works</h1>
      <div className='works--grid'>
        {projects.map((project) => {
          return (
            <NewCardItem
              slug={project.slug}
              image={project.coverImage}
              title={project.projectTitle}
              subTitle={project.projectSubtitle}
              link={{
                href: '/projects/[slug]',
                as: `/projects/${project.slug}`,
              }}
            />
          );
        })}
      </div>
      <div className='phoenix--egg'>
        <PhoenixEgg />
      </div>
    </OurWorksSection>
  );
};

export default OurWorks;
