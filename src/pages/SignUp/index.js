import React from 'react';
import PageArea from './styled';
import {Link} from 'react-router-dom';

const Page = ()=>{
    return(
        <>
            <PageArea>Página de Cadastro</PageArea>
            <Link to="/">Voltar</Link>
        </>
    );
}

export default Page;