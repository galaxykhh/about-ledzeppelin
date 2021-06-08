import { useRouter } from "next/dist/client/router";
import { useCallback } from "react";
import styled from "styled-components";

const RedirectButton = () => {
    const router = useRouter();

    const Redirect = useCallback((): void => {
        router.back();
    }, []);

    if (router.pathname === '/') {
        return null;
    };

    return (
        <Button onClick={Redirect} >←</Button>
    );
};

export default RedirectButton;

const Button = styled.button`
    all: unset;
    position: fixed;
    top: 20px;
    left: 20px;
    width: 60px;
    height: 35px;
    line-height: 40px;
    background-color: ${({ theme }) => theme.colors.transBlack};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 5px;
    text-align: center;
    font-size: 30px;
    cursor: pointer;
`;