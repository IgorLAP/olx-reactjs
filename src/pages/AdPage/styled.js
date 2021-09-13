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

        .imageAnun{
            
        }
        .infoAd{
            padding: 10px;

            .nameAd{
                margin-bottom: 20px;
            }

            .descriptioAd{

            }
        }
    }
    .rightSide{
        width: 250px;
    }
`;