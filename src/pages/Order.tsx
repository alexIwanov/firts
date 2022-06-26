import React from 'react'
import { Link } from 'react-router-dom';

const Order = () => {
	return (



		<div className='order' >
			<div>
				<img
					src="./img/check.svg"
					alt="Check" />
				<h1>Спасибо!</h1>


			</div>
			<span>Ваш заказ оформлен успешно!!!</span>
			<div className="button button--black">
				<Link to="/home">
					<span>Вернуться назад</span>
				</Link>
			</div>
		</div >


	)
}

export default Order;