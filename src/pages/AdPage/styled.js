import styled, {keyframes} from 'styled-components';

const gradient = keyframes`
    0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;

export const Fake = styled.div`
    background: linear-gradient(-90deg, #999999, #A9A9A9, #B9B9B9, #C6C5C5);
    background-size: 400% 400%;
    height: ${props=>props.height || 20}px;
    animation: ${gradient} 1s ease infinite;
`;

export const AdPageArea = styled.div`
    display: flex;

    .box{
        background-color: #FFF;
        border-radius: 5px;
        box-shadow: 0 0 4px #999;
        margin-bottom: 20px;
    }

    .box-padding{
        padding: 10px;
    }

    .leftSide{
        flex: 1;
        margin-right: 20px;

        .box{
            display: grid;
            grid-template-columns: repeat(2,1fr);
        }

        .imageAnun{
            width: 320px;
            height: 320px;
            margin-right: 20px;
            transition: all ease .3s;

            &:hover button{
                display: block;
            }

            button{
                display: none;
            }

            .each-slide img{
                display: flex;
                align-items: center;
                justify-content: center;
                background-size: cover;
                height: 320px;
            }
        }
        .infoAd{
            padding: 10px;

            .nameAd{
                margin-bottom: 20px;

                h2{
                    margin: 10px 0;
                }

                small{
                    color: #999;
                }
            }

            .descriptionAd{
                height: 70%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                small{
                    color: #999;
                }
            }
        }
    }
    .rightSide{
        width: 250px;

        .price span{
            color: #0000FF;
            display: block;
            font-weight: bold;
            font-size: 27px;
        }

        .contactSellerlink{
            background-color: #0000FF;
            color: #FFF;
            height: 30px;
            border-radius: 5px;
            box-shadow: 0 0 4px #999;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;
        }

        .createdBy strong{
            display: block;
        }
        .createdBy small{
            display: block;
            color: #999;
            padding: 10px 0;
        }
    }
`;

export const OthersArea = styled.div`
    
    .otherSlide{
        button{
            display: none;   
        }
        &:hover button{
            display: block;
        }
    }
    h2{
        font-size: 20px;
    }
    .list{
        display: grid;
        grid-template-columns: repeat(4,1fr);
        grid-auto-flow: column;
        overflow: hidden;

        .itemAd{
            width: 190px;
            height: 300px;
        }
    }
`;

export const BreadCrumb = styled.div`
    font-size: 13px;
    margin-top: 20px;
    margin-bottom: 20px;

    a{
        display: inline-block;
        margin: 0px 5px;
        text-decoration: underline;
    }
`;