import React from 'react'
import { Link } from 'react-router-dom';
import './Cart.scss';

const CartEmpty: React.FC = () => {
	return (
		<div className="cart__empty">
			<h2>
				Корзина пустая 😕
			</h2>
			<p>
				Вероятней всего, вы не заказывали ещё пиццу.
				<br />
				Для того, чтобы заказать пиццу, перейдите на главную страницу.
			</p>
			<img
				src="./img/empty-cart.png"
				alt="Empty cart" />
			<Link to="/home" className="button button--black">

				<span>Вернуться назад</span>
			</Link>
		</div>
	)
}

export default CartEmpty;