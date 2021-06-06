import React from 'react';
import Layout from "../../components/Layout";
import AlbumList from "../../components/discography/index/Discography";
import { GetStaticProps } from "next";
import { IAlbum } from '../../components/discography/index/Album';
import discographyRepository from '../../repository/discographyRepository';

interface IDiscographyIndex {
    discography: IAlbum[];
};

const DiscographyIndex = (props: IDiscographyIndex) => {
    return (
        <Layout title='Led Zeppeling Discography' >
            <AlbumList discography={props.discography} />
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const { data } = await discographyRepository.getDiscographyData();
    return {
        props: {
            discography: data
        }
    };
};

export default DiscographyIndex;