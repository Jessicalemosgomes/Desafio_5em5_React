import styled from 'styled-components';

export const Container = styled.div<{ size: number, left: number, top: number }>`
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    position: absolute;
    left: ${props => props.size}px;
    top: ${props => props.size}px;
    background-color: #FF0000;
`;