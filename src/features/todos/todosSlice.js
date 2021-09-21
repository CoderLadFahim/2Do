import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	todos: [],
};

export const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state, action) => {},
		deleteTodo: (state, action) => {},
	},
});

// Action creators are generated for each case reducer function
export const {addTodo, deleteTodo} = todosSlice.actions;

export default todosSlice.reducer;
