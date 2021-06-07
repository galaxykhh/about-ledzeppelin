import styled from "styled-components";
import Link from 'next/link';

interface IMenu {
    link: string;
    menu: string;
};

const Menu = (props: IMenu) => {
    return (
        <Layout>
            <Link href={props.link} >
                <Text>{props.menu}</Text>
            </Link>
        </Layout>
    );
};

export default Menu;

const Layout = styled.div`
    width: 95px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.transBlack};
    border-radius: 5px;
    margin: 10px;
    cursor: pointer;
`;

const Text = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
`;