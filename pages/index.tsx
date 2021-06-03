import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { WALLPAPER_PATH } from '../config';

const Home: React.FC = () => {
    return (
        <Layout title='Led Zeppelin Gallery' >
            <WallPaper />
        </Layout>
    );
};

export default Home;

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

