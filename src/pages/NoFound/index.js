import React from 'react';
import NoFoundArea from './styled';
import {Link} from 'react-router-dom';

const Page = ()=>{
    return(
        <NoFoundArea>
            <h1>Página não encontrada</h1>
            <Link to="/">Voltar</Link>
            <img src="404.png" alt="" />
        </NoFoundArea>
    );
}

export default Page;