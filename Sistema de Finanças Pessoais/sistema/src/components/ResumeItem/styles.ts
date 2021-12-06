import styled from 'styled-components';


export const Container = styled.div`
    flex: 1;

`;

export const Title = styled.div`
    text-align: center;
    font weight: bold; 
    color: #888;
    margin-botom: 5px;
`;

export const Info = styled.div`
    text-align: center;
    font weight: bold; 
    color: ${props=> props.color ?? '#000'};
`;