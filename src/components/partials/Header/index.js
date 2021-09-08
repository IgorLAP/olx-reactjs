import React from 'react';
import HeaderArea  from './styled';
import {Link} from 'react-router-dom';

import {isLogged} from '../../helpers/AuthHandler';

const Header = ()=>{
    let logged = isLogged();

    return (
        <HeaderArea>
            <div className="container">
                <Link to="/">
                    <div className="logo">
                        <div className="logo-purple">N</div>
                        <div className="logo-purple">Ã</div>
                        <div className="logo-purple">O</div>
                        <div className="logo-green">L</div>
                        <div className="logo-orange">X</div>
                    </div>
                </Link>
                <nav className="menu">
                    <ul>
                        {!logged &&
                        <>
                            <li>
                                <Link to="/signin">Login</Link>
                            </li>
                            <li>
                                <Link to="/signup">Cadastrar</Link>
                            </li>
                            <li>
                                <Link to="/signin">Poste um anúncio</Link>
                            </li>
                        </>
                        }
                        {logged &&
                        <>
                            <li>
                                <Link to="/my-account">Minha conta</Link>
                            </li>
                            <li>
                                <Link to="/about">Sobre</Link>
                            </li>
                            <li>
                                <Link to="/post-an-ad">Poste um anúncio</Link>
                            </li>
                        </>
                        }
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    );
}

export default Header;