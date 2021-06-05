import { keyframes } from "styled-components";

export const slideUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(60px);
    }
    to {
        opcaity: 1;
        transform: translateY(0px);
    }
`;

export const slideRight = keyframes`
    from {
        opacity: 0;
        transform: translateX(-60px);
    }
    to {
        opacity: 1;
        transform: translateX(0px);
    }
`;