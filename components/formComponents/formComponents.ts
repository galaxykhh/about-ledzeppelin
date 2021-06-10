import styled from "styled-components";
import { theme } from "../../styles/theme";

export const InputLayout = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 70px;
    margin-bottom: 20px;
`;

export const Input = styled.input<{ error: any }>`
    all: unset;
    position: absolute;
    top: 0px;
    width: 350px;
    height: 40px;
    padding-left: 20px;
    background-color: ${({ error }) => error ? theme.colors.transRed : theme.colors.transBlack};
    color: ${({ theme }) => theme.colors.white};
    border-radius: 2px;
    @media only screen and (max-width: 600px) {
        width: 240px;
        font-size: 14px;
    };
`;
export const Msg = styled.span`
    position: absolute;
    bottom: 0px;
    color: ${({ theme }) => theme.colors.green};
    @media only screen and (max-width: 600px) {
        font-size: 13px;
    };
`;

export const ErrorMsg = styled(Msg)`
    color: ${({ theme }) => theme.colors.red};
`;

export const CheckButton = styled.button`
    position: absolute;
    top: 5px;
    right: 20px;
    border: none;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    font-size: 15px;
    width: 80px;
    height: 30px;
    cursor: pointer;
    @media only screen and (max-width: 600px) {
        width: 50px;
        right: 75px;
        font-size: 14px;
    };
`;

export const SubmitButton = styled.button.attrs({
    type: 'submit'
})`
    border: none;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    font-size: 18px;
    width: 120px;
    height: 45px;
    margin-top: 20px;
    cursor: pointer;
`;