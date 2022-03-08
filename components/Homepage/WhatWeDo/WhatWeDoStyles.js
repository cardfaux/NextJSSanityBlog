import styled from 'styled-components';

export const TwoColumnGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 439px auto;
  align-items: end;
  justify-items: center;
  margin-bottom: 2rem;
`;

export const GlassCard = styled.div`
  opacity: 0.5;
  background: rgb(59, 208, 255);
  background: -moz-linear-gradient(
    128deg,
    rgba(59, 208, 255, 0) 45%,
    rgba(59, 208, 255, 1) 85%
  );
  background: -webkit-linear-gradient(
    128deg,
    rgba(59, 208, 255, 0) 45%,
    rgba(59, 208, 255, 1) 85%
  );
  background: linear-gradient(
    128deg,
    rgba(59, 208, 255, 0) 45%,
    rgba(59, 208, 255, 1) 85%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3bd0ff",endColorstr="#3bd0ff",GradientType=1);
  outline: 1px solid #ffffff;
  width: 439px;
  height: 268px;
`;

export const TextOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  outline: 4px solid #3bd0ff;
  width: 439px;
  height: 268px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0px 44px;
`;
