import styled from "styled-components";
import userStore from "../../store/userStore";
import Menu from './Menu';

const forNotUserList = [
    {
        link: '/signin',
        menu: 'sign in',
    },
    {
        link: '/signup',
        menu: 'sign up',
    },
];

const forUserList = [
    {
        link: '/mypage',
        menu: 'my page',
    },
]

const MenuList = () => {

    if (userStore.userData) {
        return (
            <Layout>
                {forUserList.map(item => (
                    <Menu
                        link={item.link}
                        menu={item.menu}
                        key={item.menu}
                    />
                ))}
            </Layout>
        );
    }

    return (
        <Layout>
            {forNotUserList.map(item => (
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
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;