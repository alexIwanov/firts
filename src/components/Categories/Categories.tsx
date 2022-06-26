import React, { useState } from 'react'
import './_categories.scss'


type CategoriesProps = {
	category: number;
	onClickCategory: (i: number) => void;
};


const Categories: React.FC<CategoriesProps> = ({ category, onClickCategory }) => {

	const categories = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	]


	return (
		<div className="categories">
			<ul>

				{categories.map((categoryName, index) =>
					<li key={index} onClick={() => onClickCategory(index)} className={category === index ? 'active' : ''}>{categoryName}</li>
				)}


			</ul>
		</div >
	)
}

export default Categories