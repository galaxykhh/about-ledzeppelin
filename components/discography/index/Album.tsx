import styled from 'styled-components';
import Link from 'next/link';

interface IAlbum {
    id: number;
    image: string;
    albumTitle: string;
    released: string;
};

const Album = (props: IAlbum) => {
    return (
        <Layout>
            <Link href={`/discography/${props.id}`}>
                <AlbumCover image={props.image}/>
            </Link>
            <AlbumTitle>{props.albumTitle}</AlbumTitle>
            <ReleasedAt>{props.released}</ReleasedAt>
        </Layout>
    );
};

export default Album;

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 190px;
    height: 230px;
    cursor: pointer;
    transition: .5s ease;
    :hover {
        transform: translateY(-20px);
    }
    @media only screen and (max-width: 500px) {
        width: 110px;
        height: 160px;
    };
`;

const AlbumCover = styled.a<{image: string}>`
    width: 170px;
    height: 170px;
    margin-bottom: 10px;
    background-image: url(${({ image }) => image});
    background-size: cover;
    box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.black};
    @media only screen and (max-width: 500px) {
        width: 90px;
        height: 90px;
    };
`;

const AlbumTitle = styled.div`
    font-size: 18px;
    text-align: center;
    margin-bottom: 10px;
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.white};
    @media only screen and (max-width: 900px) {
        font-size: 14px;
    };
    @media only screen and (max-width: 500px) {
        font-size: 12px;
    };
`;

const ReleasedAt = styled.div`
    font-size: 15px;
    color: ${({ theme }) => theme.colors.grey};
    @media only screen and (max-width: 500px) {
        font-size: 12px;
    };
`;
