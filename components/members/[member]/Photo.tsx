import styled from "styled-components";
import { slideUp } from "../../../styles/keyframes";

export interface ISelectedMember {
    image: string;
};

const Photo = (props: ISelectedMember) => {
    return (
        <Layout>
            <MemberImage image={props.image}  />
        </Layout>
    );
};

export default Photo;

const Layout = styled.div`
    width: 350px;
    height: 600px;
    @media only screen and (max-width: 900px) {
        width: 220px;
        height: 330px;
        margin-bottom: 20px;
    };
`;

const MemberImage = styled.div<{ image: string }>`
    width: 350px;
    height: 575px;
    border-radius: 5px;
    background-image: url(${({ image }) => image});
    background-size: cover;
    animation: ${slideUp} .8s ease;
    box-shadow: 3px 3px 5px ${({ theme }) => theme.colors.black};
    @media only screen and (max-width: 900px) {
        width: 220px; 
        height: 330px;
    };
`;
