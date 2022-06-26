import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../App';
import './Auth.scss';


const Auth: React.FC = () => {

	const { modalActive, setModalActive } = useContext(Context);

	return (
		<div className='auth' >
			<h1 className='title__auth'>Войдите на сайт что бы заказать пиццу </h1>
			<img className='auth__img' src="./img/smile_icon.svg" alt="smile" />

			<button onClick={() => setModalActive(true)} className='button-registry'>Войти</button>
		</div >
	)
}

export default Auth