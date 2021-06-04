import React from 'react';
import styled from 'styled-components';
import { slideUp } from '../../../styles/keyframes';
import Album from './Album';

interface IAlbumList {
    albumList: any[] // 백엔드 구성 후 타입 선언
};

const AlbumList: React.FC<IAlbumList> = (props) => {
    return (
        <>
            <Text>Discography</Text>
            <Layout>
                {props.albumList.map(item => (
                    <Album
                        albumTitle={item.albumTitle}
                        released={item.released}
                        key={item.id}
                    />
                ))}
            </Layout>
        </>
    );
};

export default AlbumList;

const Layout = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    width: 800px;
    height: 600px;
    animation: ${slideUp} 0.8s ease;
    @media only screen and (max-width: 900px) {
        width: 550px;
        grid-template-columns: repeat(3, 1fr);
    };
    @media only screen and (max-width: 500px) {
        width: 350px;
        height: 400px;
        grid-template-columns: repeat(2, 1fr);
    };
`;

const Text = styled.div`
    font-size: 40px;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 50px;
`;