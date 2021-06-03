import React from 'react';
import styled from 'styled-components';
import { LOGO_PATH } from '../config';

const Header: React.FC = () => {
    return (
        <Container>
            <img src={LOGO_PATH} height='100px' width='200px'/>
        </Container>
    );
};

export default Header;

const Container = styled.div`
    width: 100%;
    height: 100px;
    color: white;
`;

