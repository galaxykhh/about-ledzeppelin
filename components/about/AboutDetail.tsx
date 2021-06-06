import styled from "styled-components";
import IconList from "./IconList";
import { IIcon } from './Icon';

interface IAboutDetail {
    iconList: IIcon[];
};

const AboutDetail = (props: IAboutDetail) => {
    return (
        <Layout>
            <Text>This site was made using these things</Text>
            <IconList iconList={props.iconList} />
        </Layout>
    );
};

export default AboutDetail;

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Text = styled.div`
    font-size: 20px;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom: 20px;
    @media only screen and (max-width: 600px) {
        font-size: 2vh;
    };
`;