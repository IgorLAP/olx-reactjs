import styled from 'styled-components';

export const SearchArea = styled.div`
    background-color: red;
    border-bottom: 1px solid #CCC;

    form{
        display: flex;
        justify-content: center;
        padding: 17px;
        border-radius: 3px;
        width: 100%;
        background-color: #9BB83C;

        input, select, button{
            padding: 10px;
            outline: 0;
            margin-right: 25px;
            border: 0;
            border-radius: 5px;
        }
        input{
            flex: 1;
            transition: all ease .3s;
            border: 1px solid transparent;

            &:focus{
                border: 1px solid #000;
            }
        }
        select{
            width: 65px;
        }
        button{
            width: 80px;
            display: flex;
            justify-content: center;
            cursor: pointer;
            background-color: #49AEEF;
            color: #FFF;
            font-size: 15px;

            &:hover{
                background-color: #109EF9;
            }
        }
    }

    .categoryList{
        padding: 20px;
        display: flex;
        flex-wrap: wrap;

        .categoryItem{
            width: 25%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;


            img{
                width: 50px;
                height: 50px;
                margin-bottom: 5px;
            }

            &:hover span{
                color: #FFF;
            }
        }
    }

@media (max-width: 600px){
    form{
        flex-direction: column;

        input{
            padding: 10px;
            margin-right: 0;
            margin-bottom: 10px;
        }

        select{
            width: 100%;
            margin-bottom: 10px;
        }
        button{
            width: 100%;
        }
    }

    .categoryList .categoryItem{
        width: 50%;
        padding: 10px;
    }
}
`;

export const PageArea = styled.div`
h2{
    font-size:20px;
}
.list{
    display: flex;
    flex-wrap: wrap;

    .itemAd{
        width: 25%;
    }
}
.seeAllLinks{
    color: #000;
    font-weight:bold;
    display: inline-block;
    padding: 10px 0px;
}
.seeAllLinks:hover{
    color: #9bb83c;
}

@media (max-width:600px){

    .list .itemAd{
        width: 50%;
    }
}
`;
