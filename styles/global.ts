import { createGlobalStyle } from "styled-components";
import { reset } from 'styled-reset';
import { ThemeType } from "./theme";

interface ITheme {
    theme: ThemeType;
};

const GlobalStyle = createGlobalStyle<ITheme>`
    ${reset}

    @font-face {
        font-family: 'GmarketSansMedium';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    };

    * {
        box-sizing: border-box;
    };
    
    body {
        overflow-x: hidden;
        font-family: 'GmarketSansMedium';
        background-color: ${({ theme }) => theme.colors.black};
    };
`;

export default GlobalStyle;