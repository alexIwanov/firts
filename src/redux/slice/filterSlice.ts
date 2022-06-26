import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type Sort = {
	name: string,
	sortProperty: 'rating' | 'title' | 'price' | '-rating' | '-title' | '-price',
}

interface FilterSliceState {
	categoryId: number,
	pageCount: number,
	sort: Sort
}


const initialState: FilterSliceState = {
	categoryId: 0,
	pageCount: 1,
	sort: {
		name: 'популярности',
		sortProperty: 'rating',
	}
};

const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setCategoryId(state, action: PayloadAction<number>) {
			state.categoryId = action.payload;
		},
		setSort(state, action: PayloadAction<Sort>) {
			state.sort = action.payload;
		},
		setPageCount(state, action: PayloadAction<number>) {
			state.pageCount = action.payload;
		},

	},
});

export const { setCategoryId, setSort, setPageCount } = filterSlice.actions;

export default filterSlice.reducer;