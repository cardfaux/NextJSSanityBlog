import { Card } from 'react-bootstrap';
import Link from 'next/link';
import { urlFor } from 'lib/api';

const CardItem = ({ projectTitle, projectSubtitle, image, date, link }) => {
  return (
    <Card className={`fj-card`}>
      <div className='card-body-wrapper'>
        <Card.Header className='d-flex flex-row'>
          {/* <img
            src={'https://via.placeholder.com/150'}
            className='rounded-circle mr-3'
            height='50px'
            width='50px'
            alt='avatar'
          /> */}
          <div>
            {/* <Card.Title className='font-weight-bold mb-1'>
              Placeholder Author
            </Card.Title> */}
            <Card.Text className='card-date'>{date}</Card.Text>
          </div>
        </Card.Header>
        <div className='view overlay'>
          <Card.Img
            src={urlFor(image).height(300).crop('center').fit('clip').url()}
            alt='Card image cap'
          />
        </div>
        <Card.Body>
          <Card.Title className='card-main-title'>{projectTitle}</Card.Title>
          <Card.Text>{projectSubtitle}</Card.Text>
        </Card.Body>
      </div>
      {link && (
        <Link {...link}>
          <a className='card-button'>Read More</a>
        </Link>
      )}
    </Card>
  );
};

export default CardItem;
