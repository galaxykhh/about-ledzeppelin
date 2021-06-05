import styled from "styled-components";
import { slideUp } from "../../../styles/keyframes";
import Member from "./Member";
import { IMember } from './Member';

interface IMemberList {
    memberList: IMember[];
};

const MemberList = (props: IMemberList) => {
    return (
        <Layout>
            <Text>Members</Text>
            <GridBox>
                {props.memberList.map(item => (
                    <Member
                        id={item.id}
                        name={item.name}
                        image={item.image}
                        key={item.id}
                    />
                ))}
            </GridBox>
        </Layout>
    );
};

export default MemberList;

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 280px;
    width: 100%;
`;

const GridBox = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    width: 1000px;
    height: 400px;
    animation: ${slideUp} .8s ease;
    @media only screen and (max-width: 900px) {
        width: 500px;
        height: 600px;
        grid-template-columns: repeat(2, 1fr);
    };
    @media only screen and (max-width: 600px) {
        min-width: 200px;
        width: 100%;
        height: 400px;
    };
`;

const Text = styled.div`
    font-size: 4vh;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 50px;
    text-shadow: 5px 5px 5px ${({ theme }) => theme.colors.black}
`;