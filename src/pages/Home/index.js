import React from 'react';
import PageArea from './styled';
import {Link} from 'react-router-dom';

const Page = ()=>{
    return(
        <PageArea>Página HOME <br />
            <Link to="/about"> Ir para about </Link>
        </PageArea>
    );
}

export default Page;