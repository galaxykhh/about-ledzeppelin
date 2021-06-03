import type { AppProps } from 'next/app';
import { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import { WALLPAPER_PATH } from '../config';
import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
    const [ isIndexPage, setIsIndexPage ] = useState<boolean>(false);
    return (
        <>
            <GlobalStyle />
            <WallPaper />
            {isIndexPage ? <Header /> : null}
            <Component {...pageProps} />
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
        rgba(20, 20, 20, 0.6) 1%,
        rgba(20, 20, 20, 0.8) 40%,
        rgba(20, 20, 20, 0.9) 100%
    ),
    url(${WALLPAPER_PATH});
    background-size: cover;
    width: 100%;
    height: 100vh;
`;
