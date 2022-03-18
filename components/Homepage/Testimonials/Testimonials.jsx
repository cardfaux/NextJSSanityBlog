import Image from 'next/image';

import { TestimonialsStylesSection } from './TestimonialStyles';

const TestimonialsSection = () => {
  return (
    <TestimonialsStylesSection className='testimonials--wrapper'>
      <div className='inside--testimonials__container'>
        <div className='just--text'>
          <h5>testimonial section</h5>
          <p>
            what customers <br /> think of us
          </p>
        </div>
        <div className='article--container'>
          <article>
            <div className='top-image__container'>
              <Image
                src='/Customer.png'
                alt='cuastomer testimonial'
                width={142}
                height={142}
              />
            </div>
            <h1>john smith</h1>
            <p>
              It is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout.
            </p>
            <Image src='/Stars.png' alt='stars' width={111} height={16} />
          </article>
          <article>
            <div className='top-image__container'>
              <Image
                src='/Customer.png'
                alt='cuastomer testimonial'
                width={142}
                height={142}
              />
            </div>
            <h1>john smith</h1>
            <p>
              It is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout.
            </p>
            <Image src='/Stars.png' alt='stars' width={111} height={16} />
          </article>
        </div>
      </div>
    </TestimonialsStylesSection>
  );
};

export default TestimonialsSection;
