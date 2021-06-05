import { useRouter } from "next/dist/client/router";
import { useCallback } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";

const NotExist = () => {
    const router = useRouter();

    const goMain = useCallback(() => {
        router.push('/');
    }, []);

    return (
        <Layout title='not exist' >
            <Text>This page path does not exist !</Text>
            <PushButton onClick={goMain} >Go to main page</PushButton>
        </Layout>
    );
};

export default NotExist;

const Text = styled.div`
    font-size: 20px;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 20px;
    @media only screen and (max-width: 600px) {
        font-size: 15px;
    };
`;

const PushButton = styled.button`
    width: 150px;
    height: 40px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    transition: .2s ease;
    :hover {
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.black};
    };
    @media only screen and (max-width: 600px) {
        width: 120px;
        height: 30px;
        font-size: 13px;
    };
`;