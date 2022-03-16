import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';

import Logo from 'components/Homepage/Logo';
import ThemeToggle from 'components/ThemeToggle';

import { StyledNavbar, StyledHeader } from './NavbarStyles';

const BlogNavbar = ({ theme, toggleTheme }) => {
  return (
    <>
      <StyledHeader></StyledHeader>
      <StyledNavbar
        variant={theme.type}
        className='fj-navbar fj-nav-base'
        bg='transparent'
        expand='lg'
      >
        <Navbar.Brand className='fj-navbar-brand'>
          <Link href='/'>
            <a style={{ color: theme.fontColor }}>
              <Logo />
            </a>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            {/* <div></div> */}
            {/* <ThemeToggle onChange={toggleTheme} /> */}
            <Nav.Link
              as={() => (
                <Link href='/'>
                  <a className='fj-navbar-item fj-navbar-link active'>Home</a>
                </Link>
              )}
            />

            <Nav.Link
              as={() => (
                <Link href='/'>
                  <a className='fj-navbar-item fj-navbar-link'>Development</a>
                </Link>
              )}
            />

            <Nav.Link
              as={() => (
                <Link href='/'>
                  <a className='fj-navbar-item fj-navbar-link'>Services</a>
                </Link>
              )}
            />

            <Nav.Link
              as={() => (
                <Link href='/'>
                  <a className='fj-navbar-item fj-navbar-link'>Portfolio</a>
                </Link>
              )}
            />

            <Nav.Link
              as={() => (
                <Link href='/blogs'>
                  <a className='fj-navbar-item fj-navbar-link'>Blog</a>
                </Link>
              )}
            />

            <Nav.Link
              as={() => (
                <Link href='/'>
                  <a className='fj-navbar-item fj-navbar-link'>Contacts</a>
                </Link>
              )}
            />

            {/* <ThemeToggle onChange={toggleTheme} /> */}
          </Nav>
        </Navbar.Collapse>
      </StyledNavbar>
    </>
  );
};

export default BlogNavbar;
