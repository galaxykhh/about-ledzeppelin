import styled from "styled-components";
import Member from './Photo';
import Information from "./Information";

interface IMemberDetial {
    image: string
    name: string
    birth: string
    part: string
};

const MemberDetail = (props: IMemberDetial) => {
    return (
        <Layout>
            <Member
                image={props.image}
            />
            <Information
                name={props.name}
                birth={props.birth}
                part={props.part}
            />
        </Layout>
    );
};

export default MemberDetail;

const Layout = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 900px;
    height: 600px;
    @media only screen and (max-width: 900px) {
        justify-content: space-evenly;
        width: 650px;
        height: 400px;
    };
    @media only screen and (max-width: 600px) {
        flex-direction: column;
        justify-content: center;
        width: 280px;
        width: 100%;
    };
`;