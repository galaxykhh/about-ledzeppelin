import styled from "styled-components";
import { IAlbum, ISong } from "../index/Discography";
import SongList from "./SongList";
import Album from './Album';

interface IAlbumDetail extends IAlbum {
    songs: ISong[]
};

const AlbumDetail = (props: IAlbumDetail) => {
    return (
        <Layout>
            <Album
                image={props.image}
                albumTitle={props.albumTitle}
                released={props.released}
            />
            <SongList songs={props.songs} />
        </Layout>
    );
};

export default AlbumDetail;

const Layout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    width: 900px;
    @media only screen and (max-width: 900px) {
        flex-direction: column;
        justify-content: flex;
        align-items: center;
    };
    @media only screen and (max-width: 600px) {
        width: 450px;
        flex-direction: column;
        justify-content: flex;
        align-items: center;
    };
`;
