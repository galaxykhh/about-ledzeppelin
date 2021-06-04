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
                <a>{props.children}</a>
            </Link>
        </Layout>
    );
};

export default Button;

const Layout = styled.div`
    width: 400px;
    height: 100px;
    line-height: 100px;
    border-radius: 20px;
    margin: 20px;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    font-size: 40px;
    cursor: pointer;
    transition: .7s ease;
    :hover {
        background-color: ${({ theme }) => theme.colors.transWhite};
        color: ${({ theme }) => theme.colors.black};
        transform: scale(1.1);
    };
`;