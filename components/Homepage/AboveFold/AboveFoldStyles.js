import styled from 'styled-components';

export const FoldSection = styled.section`
  position: relative;
  margin-bottom: 2rem;
`;

export const FoldGrid = styled.div`
  display: grid;
  grid-template-columns: 50% 60%;
  justify-items: start;
  align-items: center;
`;

export const StyledPhoenixContainer = styled.div`
  svg {
    width: 35rem;
  }
`;

export const HeaderIconsContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 3rem;
  margin-top: -2rem;

  .wrapper {
    width: 56px;
    height: 56px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: 1px solid white;

    .underlay {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: white;
      opacity: 0.2;
    }
  }
  svg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 11px;
  }
`;
