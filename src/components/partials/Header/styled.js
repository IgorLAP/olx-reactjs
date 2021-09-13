import styled from 'styled-components';

const HeaderArea = styled.div`
    height: 80px;
    background-color: #FFF;
    border-bottom: 1px solid #DDD;

.container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    a{
        text-decoration: none;
    }
    .logo{
        display: flex;
        font-size: 25px;
        font-weight: 700;
    }
    .logo-purple{
        color: #6E0ED6;
    }
    .logo-green{
        color: #8ce563;
    }
    .logo-orange{
        color: #F28001;
    }
    .menu ul{
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
    }
    .menu li:last-child{
        padding: 5px 0px;
        border-radius: 3px;
        background-color: #F28001;
        cursor: pointer;
        
        &:hover{
            background-color: #DE7602;
        }
        &:hover a{
            color: #FFF;
        }
    }
    .menu li a, button{
        border: 0;
        outline: 0;
        background: none;
        font-size: 15px;
        color: #000;
        margin-right: 20px;
        margin-left: 20px;
        text-align: center;
        cursor: pointer;

        &:hover{
            color: #999;
        }
    } 
}
`;

export default HeaderArea;