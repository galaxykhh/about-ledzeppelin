import React from 'react';
import styled from 'styled-components';
import { slideUp } from '../../../styles/keyframes';
import Album from './Album';

interface ISong {
    id: number;
    title: string;
};

export interface IAlbum {
    id: number;
    image: string;
    albumTitle: string;
    released: string;
    songs: ISong[];
}

interface IDiscography {
    discography: IAlbum[];
    router: () => void;
};

const Discography = (props: IDiscography) => {
    return (
        <>
            <Text>Discography</Text>
            <Layout>
                {props.discography.map(item => (
                    <Album
                        router={props.router}
                        image={item.image}
                        albumTitle={item.albumTitle}
                        released={item.released}
                        key={item.id}
                    />
                ))}
            </Layout>
        </>
    );
};

export default Discography;

const Layout = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    width: 1000px;
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
    margin-bottom: 100px;
    text-shadow: 5px 5px 5px ${({ theme }) => theme.colors.black}
`;