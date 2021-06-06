import type { AppProps } from 'next/app';
import styled, { ThemeProvider } from 'styled-components';
import { MOBILE_WALLPAPER_PATH, WALLPAPER_PATH } from '../config';
import { theme } from '../styles/theme';
import GlobalStyle from '../styles/global';
import RedirectButton from '../components/RedirectButton';
import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import LoadingSpinner from '../components/LoadingSpinner';

function MyApp({ Component, pageProps }: AppProps) {
    const [ isLoading, setIsLoading ] = useState<boolean>(false);
    const router = useRouter()

    const handleStart = useCallback((): void => {
        setIsLoading(true);
    }, []);

    const handleComplete = useCallback((): void => {
        setIsLoading(false);
    }, []);

    useEffect(() => {
        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);
    }, []);

    return (
        <ThemeProvider theme={theme} >
            <GlobalStyle />
            <WallPaper />
            <RedirectButton />
            <FlexContainer>
                {isLoading ?
                    <LoadingSpinner /> : <Component {...pageProps} />  
                }
            </FlexContainer>
        </ThemeProvider>
    );
};
export default MyApp;


const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;

const WallPaper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background: linear-gradient(
        to bottom,
        rgba(20, 20, 20, 0.5) 1%,
        rgba(20, 20, 20, 0.9) 100%
    ), url(${WALLPAPER_PATH});
    background-size: cover;
    background-attachment: scroll;
    width: 100%;
    height: 100%;
    z-index: -1;
    @media only screen and (max-width: 600px) {
        position: fixed;
        top: 0;
        left: 0;
        background: linear-gradient(
            to bottom,
            rgba(20, 20, 20, 0.5) 1%,
            rgba(20, 20, 20, 0.9) 100%
        ), url(${MOBILE_WALLPAPER_PATH});
        background-size: cover;
        background-attachment: fixed;
        width: 100%;
        height: 100%;
        z-index: -1;
    };
`;