import styled from 'styled-components';

export const OurWorksSection = styled.section`
  h1 {
    color: #3bd0ff;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: 30px;
    margin: 50px 0;
    text-transform: uppercase;
    position: relative;
  }
  h1::before {
    content: '';
    background-color: #3bd0ff;
    width: 40px;
    height: 3px;
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .works--grid {
    display: grid;
    /* grid-template-columns: 1fr 1fr 1fr; */
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    align-items: center;
    justify-items: center;
    gap: 25px;
    .works--item {
      width: 100%;
      aspect-ratio: 1 / 1;
      background-color: #404071;
      border: inset;
    }
    .works--item.featured {
      max-width: 100%;
      background-color: #3bd0ff;
      transform: scale(1.06);
    }
    .works--text {
      padding: 30px;
      display: flex;
      flex-direction: column;
      justify-content: end;
      align-items: start;
      width: 100%;
      height: 100%;
      h3 {
        color: #ffffff;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 700;
        font-size: 33px;
        text-transform: uppercase;
      }
      p {
        color: #ffffff;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 400;
        font-size: 13px;
      }
    }
  }
  .phoenix--egg {
    display: flex;
    justify-content: end;
    align-items: center;
    svg {
      width: 471px;
      transform: rotateZ(15deg);
    }
  }
`;
