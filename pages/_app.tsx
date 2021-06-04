import type { AppProps } from 'next/app';
import styled, { ThemeProvider } from 'styled-components';
import { WALLPAPER_PATH } from '../config';
import GlobalStyle from '../styles/global';
import { theme } from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>  
            <ThemeProvider theme={theme} >
                <GlobalStyle />
                <WallPaper />
                <FlexContainer>
                    <Component {...pageProps} />
                </FlexContainer>
            </ThemeProvider>
        </>
    );
};
export default MyApp;

const WallPaper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(
        to bottom,
        rgba(20, 20, 20, 0.7) 1%,
        rgba(20, 20, 20, 0.9) 100%
    ),
    url(${WALLPAPER_PATH});
    background-size: cover;
    width: 100%;
    min-height: 100vh;
    z-index: -1;
`;


const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;