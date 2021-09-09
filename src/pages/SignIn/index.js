import React, {useState} from 'react';
import PageArea from './styled';
import {PageTitle, PageContainer, ErrorMessage} from '../../components/MainComponents';
import useApi from '../../components/helpers/olxAPI';
import {doLogin} from '../../components/helpers/AuthHandler';

const Page = ()=>{
    const api = useApi();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState(false);
    const [disable, setDisable] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setDisable(true);
        setError('');

        const json = await api.login(email, password);
        
        if(json.error){
            setError(json.error);
        } else {
            doLogin(json.token, rememberPassword); //token vindo do Web Service
            window.location.href = '/';
        }
        setDisable(false);
    }

    return(
        <PageContainer>
            <PageTitle>Login</PageTitle>
            <PageArea>
                {error &&
                    <ErrorMessage>{error}</ErrorMessage>
                }           
                <form onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area--title">E-mail</div>
                        <div className="area--input">
                            <input type="text" value={email} disabled={disable} required onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Senha</div>
                        <div className="area--input">
                            <input type="password" value={password} disabled={disable} required onChange={(e)=>setPassword(e.target.value)} />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Lembrar Senha</div>
                        <div className="area--input">
                            <input checked={rememberPassword} disabled={disable} type="checkbox" onChange={()=>setRememberPassword(!rememberPassword)}/>
                        </div>
                    </label>
                    <div className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={disable} >Fazer Login</button>
                        </div>
                    </div>
                </form>
            </PageArea>
        </PageContainer>
    );
}

export default Page;