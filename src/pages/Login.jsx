import Input from "../components/Input";
import React, { useContext } from 'react';
import Context from '../services/context/Context';
import { GreenButton, WhiteButton } from "../components/Button";
import logo from "../images/Comunicred.svg"
import "../style/Login.css"

function Login() {
	const { userAuthentication } = useContext(Context); 

    return (
        <div className="login-container" >
            <img src={logo} alt="test" className="login-logo" />
            <p>ENTRAR</p>
            <Input text="Digite o seu CPF" type="text" />
            <Input text="**************" type="password" />
            <div className="loginButton">
                <GreenButton text="ENTRAR" userAuthentication={userAuthentication} />
                <WhiteButton text="ESQUECI MINHA SENHA"/>
            </div>
        </div>
    );
}

export default Login;