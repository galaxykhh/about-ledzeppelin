import React from 'react';
import styled from 'styled-components';
import { slideUp } from '../../../styles/keyframes';
import Album from './Album';

export interface ISong {
    trackNumber: number;
    title: string;
};

export interface IAlbum {
    id: number;
    image: string;
    albumTitle: string;
    released: string;
};

interface IDiscography {
    discography: IAlbum[];
};

const Discography = (props: IDiscography) => {
    return (
        <Layout>
            <Text>Discography</Text>
            <GridBox>
                {props.discography.map(item => (
                    <Album
                        id={item.id}
                        image={item.image}
                        albumTitle={item.albumTitle}
                        released={item.released}
                        key={item.id}
                    />
                ))}
            </GridBox>
        </Layout>
    );
};

export default Discography;

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 280px;
    width: 100%;
`;

const GridBox = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    width: 900px;
    animation: ${slideUp} 0.8s ease;
    @media only screen and (max-width: 900px) {
        width: 700px;
        grid-template-columns: repeat(3, 1fr);
    };
    @media only screen and (max-width: 600px) {
        min-width: 280px;
        width: 100%;
        height: 400px;
        grid-template-columns: repeat(2, 1fr);
    };
`;

const Text = styled.div`
    font-size: 4vh;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 50px;
    text-shadow: 5px 5px 5px ${({ theme }) => theme.colors.black}
`;