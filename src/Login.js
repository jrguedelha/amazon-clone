import React, { useState } from "react";
import "./Login.css"
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<div className='login'>
			<Link to='/'>
				<img
					className="login__logo"
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
					alt=''
				/>
			</Link>

			<div className='login__container'>
				<h1>Entrar</h1>
				<form>
					<h5>E-mail</h5>
					<input
						type='text'
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>

					<h5>Password</h5>
					<input
						type='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>

					<button type='submit' className='login__signInButton'>Entrar</button>
				</form>

				<p>
					Ao entrar você está de acordo com as condições de uso e venda do clone FAKE AMAZON.
					Por favor verifique nossa política de privacidade. 
				</p>

			<button className='login__registerButton'>Crie sua conta na Amazon</button>

			</div>

		</div>
	)
}

export default Login