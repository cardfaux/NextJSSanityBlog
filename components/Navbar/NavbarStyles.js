import styled from 'styled-components';

import { Navbar } from 'react-bootstrap';

export const StyledNavbar = styled(Navbar)`
  max-width: 1184px;
  /* margin: 0 auto 23rem auto; */
  padding-top: 5rem !important;
  margin-bottom: 0;
  a.fj-navbar-item.fj-navbar-link.active {
    color: #00b7f1;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: 20px;
    text-transform: uppercase;
  }
  a.fj-navbar-item.fj-navbar-link {
    color: #ffffff;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 300;
    font-size: 20px;
    text-transform: uppercase;
  }
`;

export const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  background: url('header.svg') #1f1f50;
  background-repeat: no-repeat;
  filter: opacity(14%) brightness(100%) blur(4px);
  height: 428px;
  max-width: 100%;
  min-width: 100%;
`;
