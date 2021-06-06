import styled from "styled-components";
import { slideUp } from "../../../styles/keyframes";
import Icon, { IIcon } from "./Icon";

interface IIconList {
    iconList: IIcon[];
};

const IconList = (props: IIconList) => {
    return (
        <Layout>
            {props.iconList.map(item => (
                <Icon
                    image={item.image}
                    alt={item.alt}
                    key={item.alt}
                />
            ))}
        </Layout>
    );
};

export default IconList;

const Layout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 500px;
    height: 200px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.transWhite};
    animation: ${slideUp} .8s ease;
`;