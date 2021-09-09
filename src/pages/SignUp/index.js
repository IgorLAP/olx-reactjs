import React, {useState, useEffect} from 'react';
import PageArea from './styled';
import {PageTitle, PageContainer, ErrorMessage} from '../../components/MainComponents';
import useApi from '../../components/helpers/olxAPI';
import {doLogin} from '../../components/helpers/AuthHandler';

const Page = ()=>{

    const api = useApi();

    const [name, setName] = useState('');
    const [stateLoc, setStateLoc] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [disable, setDisable] = useState(false);
    const [error, setError] = useState('');

    const [stateList, setStateList] = useState([]);

    useEffect(()=>{
        const getStates = async()=>{
            const slist = await api.getStates();
            setStateList(slist);
        }
        getStates();
    },[]);

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setDisable(true);
        setError('');

        if(password !== confirmPassword){
            setError('Senhas diferentes');
            setDisable(false);
            return;
        }

        const json = await api.register(name, email, password, stateLoc);

        if(json.error){
            setError(json.error);
        } else {
            doLogin(json.token);
            window.location.href = '/';
        }

        setDisable(false);
    }


    return(
        <PageContainer>
            <PageTitle>Cadastro</PageTitle> 
            <PageArea>
                {error &&
                    <ErrorMessage>{error}</ErrorMessage>
                }           
                <form onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area--title">Nome Completo</div>
                        <div className="area--input">
                            <input type="text" 
                            value={name} 
                            disabled={disable} 
                            required 
                            onChange={e=>setName(e.target.value)}/>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Estado</div>
                        <div className="area--input">
                        <select 
                        value={stateLoc} 
                        onChange={e=>setStateLoc(e.target.value)} 
                        disabled={disable} 
                        required>
                                <option></option>
                                {stateList &&
                                    stateList.map((i,k)=>
                                        <option key={k} value={i._id}>{i.name}</option>
                                    )
                                }
                            </select>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">E-mail</div>
                        <div className="area--input">
                            <input type="email" 
                            value={email} 
                            disabled={disable} 
                            required 
                            onChange={e=>setEmail(e.target.value)}/>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Senha</div>
                        <div className="area--input">
                            <input type="password" 
                            value={password} 
                            disabled={disable} 
                            required 
                            onChange={e=>setPassword(e.target.value)} />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Confirmar Senha</div>
                        <div className="area--input">
                            <input type="password" 
                            value={confirmPassword} 
                            disabled={disable} 
                            required 
                            onChange={e=>setConfirmPassword(e.target.value)}/>
                        </div>
                    </label>
                    <div className="area">
                        <div className="area--title"></div>
                        <div className="area--input">
                            <button disabled={disable}>Fazer Cadastro</button>
                        </div>
                    </div>
                </form>
            </PageArea>
        </PageContainer>
    );
}

export default Page;