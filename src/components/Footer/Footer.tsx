import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss'

const Footer = () => {
	return (
		<div className="footer">

			<div className="footer-container">


				<Link to="/home">
					<div className="footer__logo">

						<img width="38" src="./img/pizza-logo.svg" alt="Pizza logo" />
						<div>
							<h1>Best Pizza</h1>
							<p>самая вкусная пицца в твоём городе</p>
						</div>


					</div>
				</Link>
				<div className='footer_telephone'>
					<img src="./img/viber.svg" alt="viber" />
					<p>тел. +375449379932</p>
					<br />
					<p>2022</p>
				</div>
				<div className='footer-social' >
					<img width={70} height={60} src="./img/instagram.svg" alt="instagram" />
					<img src="./img/twitter.svg" alt="twitter" />
					<img src="./img/facebook.svg" alt="facebook" />
				</div>
			</div>

		</div >
	)
}

export default Footer