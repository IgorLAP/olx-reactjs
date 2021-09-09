import React, {useState, useEffect} from 'react';
import PageArea from './styled';
import {PageTitle, PageContainer} from '../../components/MainComponents';
import useApi from '../../components/helpers/olxAPI';

const Page = ()=>{

    const api = useApi();

    const [userList, setUserList] = useState([]);

    useEffect(()=>{
        const getUser = async ()=>{
            const userList = await api.getUser();
            setUserList(userList);
        }
        getUser();
    },[])

    return(
        <PageContainer>
            <PageTitle>MINHA CONTA</PageTitle> 
            <PageArea>
                <ul>
                {userList.map((i,k)=>
                    <li>{i}</li>
                )}
                </ul>
            </PageArea>
        </PageContainer>
    );
}

export default Page;