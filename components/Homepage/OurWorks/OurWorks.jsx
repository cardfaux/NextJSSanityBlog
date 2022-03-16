import { OurWorksSection } from './OurWorksStyles';
import PhoenixEgg from '../PhoenixEgg';

const OurWorks = () => {
  return (
    <OurWorksSection className='our--works'>
      <h1>our works</h1>
      <div className='works--grid'>
        <div className='works--item'>
          <div className='works--text'>
            <h3>COMPANY NAME</h3>
            <p>
              It is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout.
            </p>
          </div>
        </div>

        <div className='works--item featured'>
          <div className='works--text'>
            <h3>COMPANY NAME</h3>
            <p>
              It is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout.
            </p>
          </div>
        </div>

        <div className='works--item'>
          <div className='works--text'>
            <h3>COMPANY NAME</h3>
            <p>
              It is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
      </div>
      <div className='phoenix--egg'>
        <PhoenixEgg />
      </div>
    </OurWorksSection>
  );
};

export default OurWorks;
