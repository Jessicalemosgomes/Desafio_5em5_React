import styled from 'styled-components';

export const Container = styled.div`
    background-color: #3D3F43;
    border-radius: 10px;
    padding: 10px;

    img{
        max-width: 100%;
        display: block;
        margin-bottom: 10px;
        border-radius: 10px;
    }
`;

export const UploadForm = styled.div`
    background-color: 3D3F43;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 30px;

    input[type-submit] {
        background-color: #756DF4;
        border: 0;
        color: #FFF;
        font-size: 15px;
        border-radius: 10px;
        margin: 0 20px;
        cursor: pointer;

        &:hover {
            opacity: .9;
        }
    }
`;