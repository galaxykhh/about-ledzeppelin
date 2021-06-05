import React from 'react';
import Layout from "../../components/Layout";
import AlbumList from "../../components/discography/index/Discography";
import discographyStore from "../../store/discographyStore";
import { GetStaticProps } from "next";
import { flowResult } from "mobx";
import { IAlbum } from '../../components/discography/index/Album';

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
    const discography = await flowResult(discographyStore.getDiscographyData());
    return {
        props: {
            discography: discography
        }
    };
};

export default DiscographyIndex;