import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../App';
import { ModalProps } from '../Modal/Modal';

import './_validation.scss';






const Validation: React.FC<ModalProps> = ({ active, setActive }) => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emailDirty, setEmailDirty] = useState(false);
	const [passwordDirty, setPasswordDirty] = useState(false);
	const [emailError, setEmailError] = useState('Логин не может быть пустым');
	const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');
	const [formValid, setformValid] = useState(false);
	const { isAuth, setIsAuth } = useContext(Context);

	const login = (e: any) => {
		e.prevenrdefault()
		setIsAuth(true)
	}

	const emailHandler = (e: any) => {
		setEmail(e.target.value)
		const re = /\S+@\S+\.\S+/;
		if (re.test(e.target.value)) {
			setEmailError('Неккорeктный e-mail')
		} else {
			setEmailError('')
		}
	}

	const passwordHandler = (e: any) => {
		setPassword(e.target.value)

		if (e.target.value.length < 3 || e.target.value.length > 8) {
			setPasswordError('Пароль должен быть длиннее 3 и меньше 8')
			if (!e.target.value) {
				setPasswordError('Пароль не может быть пустым')
			}
		} else {
			setPasswordError('')
		}
	}

	useEffect(() => {
		if (emailError || passwordError) {
			setformValid(false)
		} else {
			setformValid(true)
		}

	}, [emailError, passwordError])

	const blurHandler = (e: any) => {
		switch (e.target.name) {
			case 'email':
				setEmailDirty(true)
				break;
			case 'password':
				setPasswordDirty(true)
				break;
		}
	}

	return (


		<form onSubmit={login} className='validation__form'>
			<h1>Вход на сайт
				<p>введите логин и пароль</p>
			</h1>

			<div className='form__flex'>
				<input className='form__input'
					value={email}
					onChange={e => emailHandler(e)}
					onBlur={e => blurHandler(e)}
					name='email'
					type="text"
					placeholder='Введите логин' />
				{(emailDirty && emailError) && <div style={{ color: 'red', fontSize: '15px' }}>{emailError}</div>}

				<input className='form__input'
					value={password}
					onChange={e => passwordHandler(e)}
					onBlur={e => blurHandler(e)}
					name='password'
					type="text"
					placeholder='Введите пароль.....' />
				{(passwordDirty && passwordError) && <div style={{ color: 'red', fontSize: '15px' }}>{passwordError}</div>}

				<Link to='/home'>
					<button onClick={() => setActive(false)} disabled={!formValid} type='submit'>Войти</button>
				</Link>
			</div>
		</form >


	)
}

export default Validation;