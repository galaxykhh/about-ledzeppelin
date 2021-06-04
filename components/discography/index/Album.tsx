import React from 'react';
import styled from 'styled-components';

interface IAlbum {
    albumTitle: string;
    released: string;
};

const Album: React.FC<IAlbum> = (props) => {
    return (
        <Layout>
            <AlbumCover />
            <AlbumTitle> {props.albumTitle} </AlbumTitle>
            <ReleasedAt> {props.released} </ReleasedAt>
        </Layout>
    );
};

export default Album;

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 300px;
    @media only screen and (max-width: 500px) {
        width: 110px;
        height: 160px;
    };
`;

const AlbumCover = styled.div`
    width: 140px;
    height: 140px;
    margin-bottom: 10px;
    background-color: ${({ theme }) => theme.colors.white};
    @media only screen and (max-width: 500px) {
        width: 90px;
        height: 90px;
    };
`;

const AlbumTitle = styled.div`
    font-size: 20px;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.colors.white};
    @media only screen and (max-width: 500px) {
        font-size: 15px;
    };
`;

const ReleasedAt = styled.div`
    font-size: 15px;
    color: ${({ theme }) => theme.colors.white};
    @media only screen and (max-width: 500px) {
        font-size: 12px;
    };
`;
