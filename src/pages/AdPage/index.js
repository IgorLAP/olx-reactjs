import React, {useState, useEffect} from 'react';
import {AdPageArea, Fake, BreadCrumb, OthersArea} from './styled';
import {PageContainer} from '../../components/MainComponents';
import {useParams, Link} from 'react-router-dom';
import useApi from '../../components/helpers/olxAPI';
import {Slide} from 'react-slideshow-image';
import AdItem from '../../components/partials/AdItem';

const AdPage = ()=>{
    const api = useApi();
    const {id} = useParams();

    const [loading, setLoading] = useState(true);
    const [adInfo, setAdInfo] = useState([]);

    const formatDate = (date)=>{
        let cDate = new Date(date);
        let months = ['janeiro','fevereiro','março', 'abril', 'maio','junho','julho','agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
        let cDay = cDate.getDate();
        let cMonth = cDate.getMonth();
        let cYear = cDate.getFullYear();

        return `${cDay} de ${months[cMonth]} de ${cYear}`;
    }

    useEffect(()=>{
        const getAdInfo = async (id)=>{
            const json = await api.getAd(id, true);
            setAdInfo(json);
            setLoading(false);
        }
        getAdInfo(id);
    },[])


    return (
        <PageContainer>
            {adInfo.category &&
                <BreadCrumb>
                    Você está aqui: 
                    <Link to="/">Home</Link>/
                    <Link to={`/ads?states=${adInfo.stateName}`}>{adInfo.stateName}</Link>/
                    <Link to={`/ads?states=${adInfo.stateName}&cat=${adInfo.category.slug}`}>{adInfo.category.name}</Link>/ {adInfo.title}
                </BreadCrumb>
            }
            <AdPageArea>
                <div className="leftSide">
                    <div className="box">
                        <div className="imageAnun">
                            {loading &&
                                <Fake height={320} />
                            }
                            {adInfo.images &&
                              <Slide>
                                  {adInfo.images.map((i,k)=>
                                        <div key={k} className="each-slide">
                                            <img src={i} alt=""/>
                                        </div>
                                    )}
                              </Slide>  
                            }
                        </div>
                        <div className="infoAd">
                            <div className="nameAd">
                                {loading &&
                                    <Fake />
                                }
                                {adInfo.title &&
                                    <h2>{adInfo.title}</h2>
                                }
                                {adInfo.dateCreated &&
                                    <small>Criando em {formatDate(adInfo.dateCreated)}</small>
                                }
                            </div>
                            <div className="descriptionAd">
                                {loading &&
                                    <Fake height={100} />
                                }
                                <p>{adInfo.description}</p>
                                {adInfo.views &&
                                    <small><hr/>Visualizações: {adInfo.views}</small>
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
                    {adInfo.priceNegotiable &&
                        "Preço Negociável"
                    }
                    {!adInfo.priceNegotiable && adInfo.price &&
                        <div className="price">Preço: <span>R$ {adInfo.price === 0 ? "De graça" : adInfo.price.toFixed(2)}</span></div>
                    }
                    </div>
                    {loading &&
                        <Fake height={50} />
                    }
                    {adInfo.userInfo &&
                        <>
                            <a target="_blank" className="contactSellerlink" href={`mailto:${adInfo.userInfo.email}`}>Fale com o vendedor</a>
                            <div className="box box-padding createdBy">
                                <strong>{adInfo.userInfo.name}</strong>
                                <small>E-mail: {adInfo.userInfo.email}</small>
                                <small>Estado: {adInfo.stateName}</small>
                            </div>
                        </>
                    }
                </div>
            </AdPageArea>
            <OthersArea>
            {adInfo.others &&
                    <>
                        <h2>Outras ofertas do vendedor</h2>
                        <Slide className="otherSlide">
                        <div className="list">
                            {adInfo.others.map((i,k)=>
                                <AdItem others={true} key={k} data={i}/>    
                            )}
                        </div>
                        </Slide>
                    </>
                }
            </OthersArea>
        </PageContainer>
    );
}

export default AdPage;