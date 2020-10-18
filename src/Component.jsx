import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 20px;
    margin-bottom: -8px;
    border: 1px solid #ccc;
`;

export const Component = (props) => {
    const {
        children,
    } = props;

    return (
        <Container>
            {children}
        </Container>
    );
};
