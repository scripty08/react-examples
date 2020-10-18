import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: 8px;
`;

const Title = styled.div`
    padding: 10px;
    font-size: 18px;
`;

const Content = styled.div`
    padding: 0;
    background-color: #fff;
`;

export const Description = (props) => {
    const {
        title,
        children,
    } = props;

    return (
        <Container>
            <Title>
                {title}
            </Title>

            <Content>
                {children}
            </Content>
        </Container>
    );
};
