import styled from 'styled-components';
import Link from 'next/link';

export interface IMember {
    id: string;
    name: string;
    image: string;
};

const Member = (props: IMember) => {
    return (
        <Layout>
            <Link href={`/members/${props.id}`} >
                <Image image={props.image} />
            </Link>
            <Name>{props.name}</Name>
        </Layout>
    );
};

export default Member;

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 340px;
    transition: .5s ease;
    cursor: pointer;
    :hover {
        transform: translateY(-20px)
    };
    @media only screen and (max-width: 600px) {
        width: 130px;
        height: 200px;
    };
`;

const Image = styled.a<{ image: string }>`
    background-image: url(${({ image }) => image});
    background-size: cover;
    border-radius: 5px;
    width: 200px;
    height: 300px;
    margin-bottom: 20px;
    box-shadow: 3px 3px 5px ${({ theme }) => theme.colors.black};
    @media only screen and (max-width: 900px) {
        width: 130px;
        height: 195px;
    };
    @media only screen and (max-width: 600px) {
        width: 100px;
        height: 150px;
    };
`;

const Name = styled.div`
    color: ${({ theme }) => theme.colors.white};
    @media only screen and (max-width: 600px) {
        font-size: 12px;
    };
`;

