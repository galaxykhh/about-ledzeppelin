import styled from 'styled-components';
import { ButtonsType } from '../../pages/index';
import { slideUp } from '../../styles/keyframes';
import Button from './Button';

interface IIndexContainer {
    buttons: ButtonsType;
};

const ButtonList = (props: IIndexContainer) => {
    return (
        <Layout>
            {props.buttons.map(item => (
                <Button
                    to={item.to}
                    key={item.id}
                >
                    {item.children}
                </Button>
            ))}
        </Layout>
    );
};

export default ButtonList;

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    animation: ${slideUp} 0.8s ease;
`;