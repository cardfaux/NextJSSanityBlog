import styled from 'styled-components';

export const TestimonialsStylesSection = styled.section`
  margin-bottom: 10rem;
  background-color: #0f0f34;
  position: relative;
  padding: 30rem 0;
  .inside--testimonials__container {
    /* display: grid;
    grid-template-columns: auto auto; */
    display: flex;
    justify-content: center;
    max-width: 1400px;
    margin: auto;
    .just--text {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-bottom: 5rem;
      margin-right: 19%;
      h5 {
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 700;
        text-transform: uppercase;
        color: #3bd0ff;
        font-size: 30px;
        position: relative;
      }
      h5::before {
        content: '';
        background-color: #3bd0ff;
        width: 40px;
        height: 3px;
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
      }
      p {
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 300;
        text-transform: uppercase;
        color: #ffffff;
        font-size: 25px;
        position: relative;
      }
      p::before {
        content: '';
        background-color: #ffffff;
        width: 40px;
        height: 3px;
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
    article {
      /* padding: 10%; */
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      max-width: 462px;
      aspect-ratio: 1 / 1;
      background-color: #404071;
      border: inset;
    }
    article .top-image__container {
      position: relative;
    }
    article .top-image__container::before {
      content: url(Quotes.png);
      background-color: #3b55a5;
      background-position: center center;
      padding-top: 15px;
      width: 55px;
      height: 55px;
      border-radius: 50%;
      display: block;
      z-index: 1;
      position: absolute;
      bottom: 2px;
      right: 0px;
    }
    /* .article--container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-items: center;
      article {
        padding: 10%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        max-width: 462px;
        aspect-ratio: 1 / 1;
        background-color: #404071;
        border: inset;
      }
      article .top-image__container {
        position: relative;
      }
      article .top-image__container::before {
        content: url(Quotes.png);
        background-color: #3b55a5;
        background-position: center center;
        padding-top: 15px;
        width: 55px;
        height: 55px;
        border-radius: 50%;
        display: block;
        z-index: 1;
        position: absolute;
        bottom: 2px;
        right: 0px;
      }
    } */
  }
`;
