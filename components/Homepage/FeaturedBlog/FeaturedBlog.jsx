import { FeaturedBlogSection } from './FeaturedBlogStyles';

const OurWorks = ({ featuredBlogs }) => {
  return (
    <FeaturedBlogSection className='our--works'>
      <h1>feautured blog</h1>
      <div className='works--grid'>
        {featuredBlogs.map((blog) => {
          return (
            <div key={blog.slug} className='works--item'>
              <div className='works--text'>
                <h3>{blog.title}</h3>
                <p>{blog.subtitle}</p>
              </div>
            </div>
          );
        })}
        {/* <div className='works--item'>
          <div className='works--text'>
            <h3>blog NAME</h3>
            <p>
              It is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout.
            </p>
          </div>
        </div>

        <div className='works--item featured'>
          <div className='works--text'>
            <h3>blog NAME</h3>
            <p>
              It is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout.
            </p>
          </div>
        </div>

        <div className='works--item'>
          <div className='works--text'>
            <h3>blog NAME</h3>
            <p>
              It is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout.
            </p>
          </div>
        </div> */}
      </div>
    </FeaturedBlogSection>
  );
};

export default OurWorks;
