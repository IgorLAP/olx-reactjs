import styled from 'styled-components';

export const PageArea = styled.div`
    display: flex;

    .leftSide{
        width: 250px;
        margin-right: 10px;

        .filterName{
            font-size: 15px;
            margin: 10px 0;
        }

        input, select{
            width: 100%;
            border: 2px solid #9BB83C;
            border-radius: 5px;
            outline: 0;
            font-size: 15px;
            color: #000;
            padding: 10px;
        }
        ul,li{
            margin: 0;
            padding: 0;
            list-style: none;
        }

        .categoryItem{
            display: flex;
            align-items: center;
            padding: 10px;
            color: #000;
            cursor: pointer;
            border-radius: 5px;

            img{
                width: 25px;
                height: 25px;
                margin-right: 5px;
            }
            span{
                font-size: 14px;
            }
        }

        .categoryItem:hover, 
        .categoryItem.active{
            background-color: #9BB83C;
            color: #FFF;
        }
    }
    .rightSide{
        flex: 1;

        h2{
            margin-top: 0;
            font-size: 18px;
        }
        .listWarning{
            padding: 30px;
            text-align: center;
        }
        .list{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
        }

        .pagination{
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 10px 0;
            flex-wrap: wrap;

            .pagItem{
                width: 30px;
                height: 30px;
                border: 1px solid #000;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 14px;
                margin-right: 5px;
                margin-bottom: 5px;
                cursor: pointer;

                &.active,&:hover{
                    color: #FFF;
                    background-color: #000;
                }
                
            }
        }
    }
`;
