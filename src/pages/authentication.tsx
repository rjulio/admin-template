import { useState } from 'react';

import Input from '@/components/auth/Input';

export default function Authentication() {
	const [mode, setMode] = useState<'login'|'register'>('login');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	function submit() {
		if (mode === 'login') {
			console.info('login');
		} else {
			console.info('register');
		}
	}

	function renderButton() {
		const isLogin = mode === 'login'
		return (
			<a 
				onClick={ () => setMode(isLogin ? 'register' : 'login') }
				className={`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer`}>
				{ isLogin ? 'Crie uma conta gratuita' : 'Entre com suas credenciais' }
			</a>
		);
	}

	return (
		<div className=" flex flex-col h-screen items-center justify-center">
			<div className="w-1/2">
				<h1 className={`
					text-xl font-bold mb-5
				`}>
					{
						mode === 'login' ? 
							'Entre com a sua conta' : 
							'Cadastre-se na plataforma'
					}
				</h1>
				<Input 
					type="email"
					label="Email" 
					value={ email } 
					valueChanged={ setEmail }
					required
				/>

				<Input 
					type="password"
					label="Senha" 
					value={ password } 
					valueChanged={ setPassword }
				/>

				<button
					onClick={ submit }
					className={`
						w-full bg-indigo-500 hover:bg-indigo-400
						text-white rounded-lg px-4 py-3 mt-6
					`}>
					{ mode === 'login' ? 'Entrar' : 'Cadastrar' }
				</button>
				<hr className="my-6 border-gray-300 w-full" />
				<button
					className={`
						w-full bg-red-500 hover:bg-red-400
						text-white rounded-lg px-4 py-3
					`}
					onClick={ submit }>
					Entrar com o google
				</button>

				<p className="mt-8 text-center">
					{ renderButton() }
				</p>
			</div>
		</div>
	);
}