import styled from "styled-components";
import { slideRight } from "../../../styles/keyframes";

export interface ISong {
    trackNumber: number;
    title: string;
    delay: number;
};

const Song = (props: ISong) => {
    return (
        <Layout
            trackNumber={props.trackNumber}
            delay={props.delay}
        >
            {props.trackNumber}. {props.title}
        </Layout>
    );
};

export default Song;

interface ILayout {
    trackNumber: number;
    delay: number;
}

const Layout = styled.li<ILayout>`
    width: 400px;
    height: 30px;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.white };
    white-space: nowrap;
    margin-bottom:  20px;
    opacity: 0;
    animation: ${slideRight} .6s ease forwards;
    :nth-child(${({ trackNumber }) => trackNumber }) {
        animation-delay: ${({ delay }) => delay }s;
    };
    @media only screen and (max-width: 600px) {
        width: 300px;
        font-size: 13px;
    };
`;