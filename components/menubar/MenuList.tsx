import styled from "styled-components";
import Menu from './Menu';

const menuList = [
    {
        link: '/signin',
        menu: 'sign in',
    },
    {
        link: '/signup',
        menu: 'sign up',
    },
];

const MenuList = () => {
    return (
        <Layout>
            {menuList.map(item => (
                <Menu
                    link={item.link}
                    menu={item.menu}
                    key={item.menu}
                />
            ))}
        </Layout>
    );
};

export default MenuList;

const Layout = styled.div`
    position: absolute;
    top: 10px;
    right: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;