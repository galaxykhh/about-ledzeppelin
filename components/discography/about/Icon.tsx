import styled from "styled-components";

export interface IIcon {
    alt: string;
    image: string;
};

const Icon = (props: IIcon) => {
    return (
        <Layout>
            <Image
                src={props.image}
                alt={props.alt}
            />
        </Layout>
    );
};

export default Icon;

const Layout = styled.div`
    width: 150px;
    height: 150px;
`;

const Image = styled.img`
    width: 150px;
    height: 150px;
    object-fit: contain;
`;