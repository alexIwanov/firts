import React, { createContext, useState, Dispatch, SetStateAction } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header/Header';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import './scss/app.scss';
import Order from './pages/Order';
import Modal from './components/Modal/Modal';
import Validation from './components/Validation/Validation';
import Auth from './pages/Auth/Auth'
import CartEmpty from './components/CartItem/CartEmpty';
import Footer from './components/Footer/Footer';



export const Context: any = createContext(null);



export interface Search {
	searchQuery?: string;
	setSearchQuery?: React.Dispatch<React.SetStateAction<string>>;
}

const App: React.FC<Search> = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [isAuth, setIsAuth] = useState(null)
	const [modalActive, setModalActive] = useState<boolean>(false)

	return (
		<div className="wrapper">
			<Context.Provider value={{ searchQuery, setSearchQuery, isAuth, setIsAuth, modalActive, setModalActive }}>
				<Header />
				<div className="content">
					<Routes>
						<Route path='/' element={<Auth />} />
						<Route path="/home" element={<Home />} />
						<Route path="*" element={<NotFound />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/cartEmpty" element={<CartEmpty />} />
						<Route path="/order" element={<Order />} />
					</Routes>
				</div>
				<Footer />
			</Context.Provider>
		</div >
	);
}

export default App;
