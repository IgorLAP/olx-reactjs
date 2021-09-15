import React, {useState, useEffect} from 'react';
import PageArea from './styled';
import {PageTitle, PageContainer} from '../../components/MainComponents';
import useApi from '../../components/helpers/olxAPI';

const Page = ()=>{
    const api = useApi();
    
    const [user, setUser] = useState([]);

    useEffect(()=>{
        const getUser = async ()=>{
            const ulist = await api.userMe();
            setUser(ulist);
        }
        getUser();
    },[]);

    return(
        <PageContainer>
            <PageTitle>Minha Conta</PageTitle> 
            <PageArea>
                {user && 
                    user.map((i,k)=>
                        <div key={k}>{i}</div>
                    )
                }
            </PageArea>
        </PageContainer>
    );
}

export default Page;