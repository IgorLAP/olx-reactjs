import styled from 'styled-components';

const FooterArea = styled.div`
    height: 100px;
    border-top: 1px solid #CCC;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #999;
    font-size: 14px;
    margin-top: 20px;
    padding: 10px;

    a{
        color: #000;
        margin: 0 5px;
        display: flex;
        align-items: center;
        
        :hover{
            text-decoration: underline;
        }
    
        img{
            margin: 0 5px;
            width: 25px;
            height: 25px;
        }
    }

`;

export default FooterArea;