import styled from 'styled-components';
import { MainContainer } from './PageLayoutStyles';

import Head from 'next/head';
import Navbar from '../Navbar/Navbar';
import { useTheme } from 'providers/ThemeProvider';

export default function PageLayout({ children, className }) {
  const { theme, toggleTheme } = useTheme();
  return (
    <StyledWrapper className={theme.type}>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <MainContainer>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <div className={`page-wrapper ${className}`}>{children}</div>
        <footer className='page-footer'>
          <div>
            <a href='#'>courses</a>
            {' | '}
            <a href='#'>github</a>
            {' | '}
            <a href='#'>facebook</a>
          </div>
        </footer>
      </MainContainer>
      <style jsx global>
        {`
          html,
          body {
            background: ${theme.background};
            color: ${theme.fontColor};
            transition: color 0.2s ease-out 0s, background 0.2s ease-out 0s;
          }
        `}
      </style>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: relative;
`;
