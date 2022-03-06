import styled from 'styled-components';

import { Navbar } from 'react-bootstrap';

export const StyledNavbar = styled(Navbar)`
  max-width: 1184px;
  /* margin: 0 auto 23rem auto; */
  padding-top: 5rem !important;
  margin-bottom: 0;
`;

export const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  background: url('header.svg') #1f1f50;
  filter: opacity(14%) brightness(100%) blur(4px);
  height: 428px;
  width: 1610px;
`;
