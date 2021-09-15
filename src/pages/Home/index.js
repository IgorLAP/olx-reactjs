import React, {useState, useEffect} from 'react';
import {PageArea, SearchArea} from './styled';
import {PageContainer} from '../../components/MainComponents';
import useApi from '../../components/helpers/olxAPI';
import {Link} from 'react-router-dom';
import AdItem from '../../components/partials/AdItem';

const Page = ()=>{
    const api = useApi();

    const [stateList, setStateList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [adList, setAdList] = useState([]);

    useEffect(()=>{
        const getStates = async ()=>{
            const slist = await api.getStates();
            setStateList(slist);
        }
        getStates();
    },[]);

    useEffect(()=>{
        const getCategories = async ()=>{
            const clist = await api.getCategories();
            setCategories(clist);
        }
        getCategories();
    },[]);

    useEffect(()=>{
        const getRecentAds = async ()=>{
            const adslist = await api.getAds({
                sort: 'desc',
                limit: 8
            });
            setAdList(adslist.ads);
        }
        getRecentAds();
    },[]);

    return(
        <>
            <SearchArea>
                <PageContainer>
                    <form method="GET" action="/ads">
                        <input type="text" name="q" placeholder="O que você procura?"/>
                        <select name="state">
                            <option></option>
                            {stateList &&
                                stateList.map((i,k)=>
                                <option key={k}>{i.name}</option>
                            )
                            }
                        </select>
                        <button type="submit">Pesquisar</button>
                    </form>
                    <div className="categoryList">
                        {categories &&
                            categories.map((i,k)=>
                            <Link key={k} to={`/ads?cat=${i.slug}`} className="categoryItem">
                                <img src={i.img} alt={i.name} />
                                <span>{i.name}</span>
                            </Link>
                        )}
                    </div>
                </PageContainer>
            </SearchArea>
            <PageContainer>
                <PageArea>
                    <h2>Anúncios Recentes</h2>
                    <div className="list">
                        {adList &&
                            adList.map((i,k)=>
                                <AdItem others={false}  key={k} data={i}/>
                            )
                        }
                    </div>
                    <Link to="/ads" className="seeAllLinks">Ver todos</Link>
                    <hr/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac egestas eros, ut porttitor neque. Cras varius mollis vehicula. Nam auctor faucibus fermentum. Vestibulum ultricies scelerisque ante, eu eleifend purus.
                </PageArea>
            </PageContainer>
        </>
    );
}

export default Page;