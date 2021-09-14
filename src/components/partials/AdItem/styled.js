import styled from 'styled-components';

export const Item = styled.div`
    display: flex;

    a{
    display: block;
    border: 2px solid transparent;
    background-color: #FFF;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    color: #000;
    transition: all ease .3s;

    &:visited{
        color: #000;
    }

    &:hover{
        background-color: #EEE;
        border: 2px solid #CCC;
    }

    .itemImage img{
        width: 100%;
        border-radius: 5px;
    }

    .itemName{
        font-weight: bold;
    }
}
`;