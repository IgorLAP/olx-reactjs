import React, {useState} from 'react';
import {AdPageArea, Fake} from './styled';
import {PageContainer} from '../../components/MainComponents';
import {useParams} from 'react-router-dom';


const AdPage = ()=>{

    const {id} = useParams();

    const [loading, setLoading] = useState(true);

    console.log(id);

    return (
        <PageContainer>
            <AdPageArea>
                <div className="leftSide">
                    <div className="box">
                        <div className="imageAnun">
                            {loading &&
                                <Fake height={200} />
                            }
                        </div>
                        <div className="infoAd">
                            <div className="nameAd">
                                {loading &&
                                    <Fake />
                                }
                            </div>
                            <div className="descriptionAd">
                                {loading &&
                                    <Fake height={100} />
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightSide">
                    <div className="box box-padding">
                    {loading &&
                        <Fake />
                    }
                    </div>
                    <div className="box box-padding">
                    {loading &&
                        <Fake height={50} />
                    }
                    </div>

                </div>
            </AdPageArea>
        </PageContainer>
    );
}

export default AdPage;