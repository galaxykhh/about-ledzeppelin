import React from 'react';
import Layout from "../../components/Layout";
import AlbumList from "../../components/discography/index/Discography";
import { observer } from "mobx-react";
import discographyStore from "../../store/discographyStore";
import { GetStaticProps } from "next";
import { flowResult } from "mobx";
import { IAlbum } from '../../components/discography/index/Discography';

interface IDiscographyIndex {
    list: IAlbum[];
};

const DiscographyIndex: React.FC<IDiscographyIndex> = observer((props) => {
    return (
        <Layout title='Discography' >
            <AlbumList
                discography={props.list}
            />
        </Layout>
    );
});

export const getStaticProps: GetStaticProps = async () => {
    const discography = await flowResult(discographyStore.getDiscographyData());
    return {
        props: {
            list: discography
        }
    };
};


export default DiscographyIndex;