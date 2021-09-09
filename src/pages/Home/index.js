import React, {useState, useEffect} from 'react';
import PageArea from './styled';
import {Link} from 'react-router-dom';
import {PageTitle, PageContainer} from '../../components/MainComponents';
import useApi from '../../components/helpers/olxAPI';

const Page = ()=>{

    return(
        <PageContainer>
            <PageTitle>Inicio</PageTitle> 
            <PageArea>
                
            </PageArea>
        </PageContainer>
    );
}

export default Page;