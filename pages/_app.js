import { createGlobalStyle, ThemeProvider } from 'styled-components';

import '../styles/globals.css';
import 'highlight.js/styles/dracula.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
