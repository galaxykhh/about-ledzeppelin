import Layout from "../../components/Layout";
import AlbumList from "../../components/discography/index/AlbumList";

const albumList = [
    {
        id: 1,
        albumTitle: 'LED 1',
        released: '12 January 5678',
    },
    {
        id: 2,
        albumTitle: 'LED 2',
        released: '12 January 1234',
    },
    {
        id: 3,
        albumTitle: 'LED 3',
        released: '12 January 5678',
    },
    {
        id: 4,
        albumTitle: 'LED 4',
        released: '12 January 1234',
    },
    {
        id: 5,
        albumTitle: 'LED 5',
        released: '12 January 5678',
    },
    {
        id: 6,
        albumTitle: 'LED 6',
        released: '12 January 1234',
    },
    {
        id: 7,
        albumTitle: 'LED 7',
        released: '12 January 5678',
    },
    {
        id: 8,
        albumTitle: 'LED 8',
        released: '12 January 1234',
    }
];

const Discography = () => {
    return (
        <Layout title='Discography' >
            <AlbumList
                albumList={albumList}
            />
        </Layout>
    );
};

export default Discography;