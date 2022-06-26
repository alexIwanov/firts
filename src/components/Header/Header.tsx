import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import '../Header/_header.scss'
import { Context } from '../../App'
import { ModalProps } from '../Modal/Modal';
import Modal from '../Modal/Modal';
import Validation from '../Validation/Validation'
import NotFound from '../../pages/NotFound'



const Header: React.FC = () => {

	const items = useSelector((state: any) => state.cartSlice.items)
	const totalPrice = useSelector((state: any) => state.cartSlice.totalPrice)

	const { searchQuery, setSearchQuery } = useContext(Context);
	const { modalActive, setModalActive } = useContext(Context)


	return (
		<div className="header">

			<div className="container">


				<Link to="/home">
					<div className="header__logo">
						<img width="38" src="./img/pizza-logo.svg" alt="Pizza logo" />
						<div>
							<h1>Best Pizza</h1>
							<p>самая вкусная пицца в твоём городе</p>
							<span>	тел. +375449379932</span>
						</div>

					</div>
				</Link>

				<div className="header__search">
					<svg
						enableBackground="new 0 0 512 512"
						height="17px"
						id="Layer_1"
						version="1.1"
						viewBox="0 0 512 512"
						width="20px"
						xmlns="http://www.w3.org/2000/svg" >
						<path d="M503.866,477.974L360.958,335.052c28.725-34.544,46.017-78.912,46.017-127.336  c0-110.084-89.227-199.312-199.312-199.312C97.599,8.403,8.351,97.631,8.351,207.715c0,110.064,89.248,199.312,199.312,199.312  c48.435,0,92.792-17.292,127.336-46.017l142.908,142.922L503.866,477.974z M29.331,207.715c0-98.334,79.987-178.332,178.332-178.332  c98.325,0,178.332,79.998,178.332,178.332s-80.007,178.332-178.332,178.332C109.318,386.047,29.331,306.05,29.331,207.715z" fill="#37404D" />
					</svg>
					<input
						value={searchQuery}
						onChange={(event) => setSearchQuery(event.target.value)}
						placeholder='Поиск...'
						type='text' />
					{searchQuery && (
						<svg
							onClick={() => setSearchQuery('')}
							className='clear'
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"><g><path
								d="M0 0h24v24H0z"
								fill="none" />
								<path
									d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" /></g>
						</svg>
					)}

				</div>

				<Modal active={modalActive} setActive={setModalActive} >
					<Validation active={modalActive} setActive={setModalActive} />
				</Modal>



				<div className="header__cart">
					<Link to='/'>
						<button className='button__header'>Выйти</button>
					</Link>
					<Link to={"/cart"} className="button__header button--cart">

						<span>{totalPrice} ₽</span>

						<div className="button__delimiter"></div>
						<svg
							width="18"
							height="18"
							viewBox="0 0 18 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z"
								stroke="white"
								strokeWidth="1.8"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z"
								stroke="white"
								strokeWidth="1.8"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669"
								stroke="white"
								strokeWidth="1.8"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<span>{items.length}</span>
					</Link>

				</div>
			</div>

		</div >
	)
}

export default Header;