import styled from 'styled-components';

const NoFoundArea = styled.div`
    height: calc(100vh - 200px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
        font-size: 24px;
    }
    img{
        max-width: 450px;
    }
`;

export default NoFoundArea;