import React from 'react';
import styled from 'styled-components';
import Button from '../../components/index/Button';
import { ButtonsType } from '../../pages/index';

interface IIndexContainer {
    buttons: ButtonsType;
};

const IndexContainer: React.FC<IIndexContainer> = (props) => {
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

export default IndexContainer;

const Layout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
`;