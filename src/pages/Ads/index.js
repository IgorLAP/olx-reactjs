import React, {useState, useEffect} from 'react';
import {PageArea} from './styled';
import {PageContainer} from '../../components/MainComponents';
import useApi from '../../components/helpers/olxAPI';
import {useLocation, useHistory} from 'react-router-dom';
import AdItem from '../../components/partials/AdItem';

let timer;

const Page = ()=>{
    const api = useApi();
    const history = useHistory();

    const useQueryString = ()=>{
        return new URLSearchParams( useLocation().search );
    }
    const query = useQueryString();
    
    const [q, setQ] = useState( query.get('q') != null ? query.get('q') : '' );
    const [cat, setCat] = useState( query.get('cat') != null ? query.get('cat') : '' );
    const [state, setState] = useState( query.get('state') != null ? query.get('state') : '' );

    const [adsTotal, setAdsTotal] = useState(0);
    const [stateList, setStateList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [adList, setAdList] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    const [opacity, setOpacity] = useState(1);
    const [loading, setLoading] = useState(true);

    const getAdsList = async ()=>{
        setLoading(true);

        let offset = (currentPage - 1) * 18;

        const json = await api.getAds({
            sort: 'desc',
            limit: 27,
            q,
            cat,
            state,
            offset 
        });
        setAdList(json.ads);
        setAdsTotal(json.total);
        setOpacity(1);
        setLoading(false);
    }

    useEffect(()=>{
        if(adList.length !== 0){
            setPageCount( Math.ceil( adsTotal / adList.length ) );
        } else {
            setPageCount(0);
        }

    },[adsTotal]);

    useEffect(()=>{
        setOpacity(0.3);
        getAdsList();
    },[currentPage]);

    useEffect(()=>{
        let querySring = [];
        if(q){
            querySring.push(`q=${q}`);
        }
        if(cat){
            querySring.push(`cat=${cat}`);
        }
        if(state){
            querySring.push(`state=${state}`)
        }

        history.replace({
            search: `?${querySring.join('&')}`
        });

        if(timer){
            clearTimeout(timer);
        }

        timer = setTimeout(getAdsList, 2000);
        setOpacity(0.3);
        setCurrentPage(1);
    },[q, cat, state]);

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

    let pagination = [];
    for(let i=1;i<=pageCount;i++){
        pagination.push(i);
    }

    console.log(currentPage !== 1);

    return(
        <PageContainer>
            <PageArea>
                <div className="leftSide">
                    <form method="GET">
                        <input type="text" name="q" placeholder="O que você procura?" value={q} onChange={e=>setQ(e.target.value)}/>
                        <div className="filterName">Estado:</div>
                        <select name="state" value={state} onChange={e=>setState(e.target.value)}>
                            <option></option>
                            {stateList.map((i,k)=>
                                <option key={k} value={i.name}>{i.name}</option>    
                            )}
                        </select>
                        <div className="filterName">Categoria:</div>
                        <ul>
                            {categories.map((i,k)=>
                                <li key={k} onClick={()=>setCat(i.slug)} className={cat === i.slug ? 'categoryItem active' : 'categoryItem'}>
                                    <img  src={i.img} alt={i.name}/>
                                    <span>{i.name}</span>
                                </li>
                            )}
                        </ul>
                    </form>
                </div>
                <div className="rightSide">
                    <h2>Resultados</h2>
                    {loading && adList.length === 0 &&
                        <div className="listWarning">Carregando...</div>
                    }
                    {!loading && adList.length === 0 &&
                        <div className="listWarning">Resultado não encontrado</div>
                    }
                    <div className="list" style={{opacity}}>
                        {adList.map((i,k)=>
                            <AdItem key={k} data={i}/>    
                        )}
                    </div>

                    <div className="pagination">
                        {pagination.map((i,k)=>
                            <div onClick={()=>setCurrentPage(i)} key={k} className={i===currentPage ? 'pagItem active' : 'pagItem'}>{i}</div>    
                        )}
                    </div>
                </div>
            </PageArea>
        </PageContainer>
    );
}

export default Page;