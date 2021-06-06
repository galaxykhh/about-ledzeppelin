import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { ParsedUrlQuery } from 'querystring';
import { IAlbum } from "../../components/discography/index/Album";
import { ISong } from "../../components/discography/[id]/Song";
import Layout from "../../components/Layout";
import AlbumDetail from "../../components/discography/[id]/AlbumDetail";
import discographyRepository from "../../repository/discographyRepository";

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

export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await discographyRepository.getDiscographyData();
    const paths = data.map((x: IAlbum) => ({
        params: { id: x.id }
    }))
    return {
        paths,
        fallback: false
    };
};

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
    const { id } = context.params as IParams;
    const { data } = await discographyRepository.getSelectedAlbum(id);
    return {
        props: data
    };
};

export default SelectedAlbum;