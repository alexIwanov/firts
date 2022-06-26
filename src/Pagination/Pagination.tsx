import React from 'react'
import ReactPaginate from 'react-paginate';
import st from './Pagination.module.scss';


type PaginationProps = {
	onPageChange: (page: number) => void;
}


const Pagination: React.FC<PaginationProps> = ({ onPageChange }) => {
	return (
		<div className={st.wrapper}>
			<ReactPaginate
				className={st.root}
				breakLabel="..."
				nextLabel=">"
				onPageChange={event => onPageChange(event.selected + 1)}
				pageRangeDisplayed={4}
				pageCount={3}
				previousLabel="<"

			/>
		</div>
	)
}

export default Pagination