import Phoenix from '../Phoenix';
import { FoldSection, FoldGrid } from './AboveFoldStyles';

const AboveFold = () => {
  return (
    <FoldSection className='above--fold'>
      <FoldGrid className='inside--fold'>
        <div className='text'>
          <h1>from the ashes studio</h1>
          <h2>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h2>
          <p>
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of letters,
            as opposed to using 'Content here, content here', making it look like
            readable English.
          </p>
        </div>
        <div className='phoenix'>
          <Phoenix />
        </div>
      </FoldGrid>
    </FoldSection>
  );
};

export default AboveFold;
