import { flowResult } from "mobx";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { ParsedUrlQuery } from 'querystring';
import discographyStore from "../../store/discographyStore";
import { IAlbum } from "../../components/discography/index/Album";
import { ISong } from "../../components/discography/[id]/Song";
import Layout from "../../components/Layout";
import AlbumDetail from "../../components/discography/[id]/AlbumDetail";

interface IParams extends ParsedUrlQuery {
    id: string;
};

export interface IAlbumDetail extends IAlbum {
    songs: ISong[];
};

const SelectedAlbum = (props: IAlbumDetail) => {
    return(
        <Layout title={props.albumTitle} >
            <AlbumDetail
                id={props.id}
                songs={props.songs}
                image={props.image}
                albumTitle={props.albumTitle}
                released={props.released}
            />
        </Layout>
    );
};

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
    const { id } = context.params as IParams;
    const data = await flowResult(discographyStore.getSelectedAlbum(id));
    return {
        props: data
    }
};

export default SelectedAlbum;