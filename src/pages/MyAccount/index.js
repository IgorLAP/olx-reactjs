import React, {useState, useEffect} from 'react';
import PageArea from './styled';
import {PageTitle, PageContainer} from '../../components/MainComponents';
import useApi from '../../components/helpers/olxAPI';

const Page = ()=>{

    

    return(
        <PageContainer>
            <PageTitle>MINHA CONTA</PageTitle> 
            <PageArea>
                
            </PageArea>
        </PageContainer>
    );
}

export default Page;