import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	todos: [],
};

export const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state, { payload }) => {
			state.todos = [...state.todos, payload];
		},
		deleteTodo: (state, action) => {},
		clearTodos: (state, action) => {
			state.todos = [];
		},
	},
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, clearTodos } = todosSlice.actions;

export default todosSlice.reducer;
