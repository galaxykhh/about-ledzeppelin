import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

interface IButton {
    to: string;
}

const Button: React.FC<IButton> = (props) => {
    return (
        <Layout>
            <Link href={props.to} >
                <Anchor>{props.children}</Anchor>
            </Link>
        </Layout>
    );
};

export default Button;

const Layout = styled.div`
    text-decoration: none;
    width: 350px;
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

const Anchor = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    text-shadow: 5px 5px 5px ${({ theme }) => theme.colors.black};
`;