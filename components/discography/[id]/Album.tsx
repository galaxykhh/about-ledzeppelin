import styled from "styled-components";

interface IAlbum {
    image: string;
    albumTitle: string;
    released: string;
}

const Album = (props: IAlbum) => {
    return (
        <Layout>
            <AlbumCover image={props.image} />
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
    width: 360px;
`;

const AlbumCover = styled.div<{image: string}>`
    width: 350px;
    height: 350px;
    margin-bottom: 10px;
    background-image: url(${({ image }) => image});
    background-size: cover;
    box-shadow: 5px 5px 5px ${({ theme }) => theme.colors.black};
    @media only screen and (max-width: 900px) {
        
    };
    @media only screen and (max-width: 500px) {
        width: 250px;
        height: 250px;
    };
`;

const AlbumTitle = styled.div`
    font-size: 18px;
    text-align: center;
    margin-bottom: 10px;
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.white};
`;

const ReleasedAt = styled.div`
    font-size: 15px;
    color: ${({ theme }) => theme.colors.grey};
    margin-bottom: 20px;
`;