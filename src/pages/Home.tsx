import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import Skeleton from '../components/Skeleton/Skeleton';
import Sort from '../components/Sort/Sort';
import BlockItem from '../components/Block/BlockItem';
import Categories from '../components/Categories/Categories';
import Pagination from '../Pagination/Pagination';
import { Context } from '../App';
import { setCategoryId, setPageCount } from '../redux/slice/filterSlice';
import NotFound from './NotFound';




const Home: React.FC = () => {
	const dispatch = useDispatch();
	const categoryId = useSelector((state: any) => state.filterSlice.categoryId);
	const sortType = useSelector((state: any) => state.filterSlice.sort.sortProperty);
	const currentPage = useSelector((state: any) => state.filterSlice.pageCount);


	const { searchQuery } = useContext(Context)
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);







	React.useEffect(() => {
		setIsLoading(true);

		const sort = sortType.replace('-', '');
		const order = sortType.includes('-') ? 'asc' : 'desc';
		const category = categoryId > 0 ? `&category=${categoryId}` : '';
		const search = searchQuery ? `&search=${searchQuery}` : '';



		axios.get(`https://62a45e1c259aba8e10e71821.mockapi.io/items?page=${currentPage}&limit=8${category}&sortBy=${sort}&order=${order}${search}`)
			.then((response) => {
				setItems(response.data);
				setIsLoading(false);
			})
	}, [categoryId, sortType, searchQuery, currentPage]);


	const onClickCategory = (id: number) => {
		dispatch(setCategoryId(id))
	}

	const onPageChange = (page: number) => {
		dispatch(setPageCount(page))
	}

	return (

		<div className="container">
			<div className="content__top">

				<Categories category={categoryId} onClickCategory={onClickCategory} />
				<Sort />
			</div>
			<h2 className="content__title">Все пиццы</h2>

			<div className="content__items">
				{isLoading
					? [...new Array(6)].map((index) => <Skeleton key={index} />)
					: items.map((obj: any) => <BlockItem key={obj.id}  {...obj} />
					)}
			</div>

			<Pagination onPageChange={onPageChange} />


		</div>
	)
}

export default Home;