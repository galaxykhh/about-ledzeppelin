import { ReactNode } from 'react';
import styled from 'styled-components';

interface IButton {
    to: string;
    children: ReactNode
    pushTo: (to: string) => void;
};

const Button = (props: IButton) => {
    return (
        <Layout onClick={() => props.pushTo(props.to)} >
            <Category>{props.children}</Category>
        </Layout>
    );
};

export default Button;

const Layout = styled.div`
    text-decoration: none;
    width: 300px;
    height: 70px;
    line-height: 70px;
    border-radius: 10px;
    margin: 10px;
    text-align: center;
    font-size: 30px;
    cursor: pointer;
    transition: .7s ease;
    &:hover {
        background-color: ${({ theme }) => theme.colors.transWhite};
        transform: scale(1.05);
    };
`;

const Category = styled.div`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    text-shadow: 2px 2px 5px ${({ theme }) => theme.colors.black};
    @media only screen and (max-width: 600px) {
        font-size: 3vh;
    };
`;