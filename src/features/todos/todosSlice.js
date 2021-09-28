import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	todos: [
		{ text: 'Take out the trash', id: 1, isCompleted: false },
		{ text: 'do the dishes', id: 2, isCompleted: false },
		{ text: 'Hug your mum', id: 3, isCompleted: false },
		{ text: 'Wash the Car', id: 5, isCompleted: false },
		{
			text: 'Establish neo-marxist communism',
			id: 4,
			isCompleted: false,
		},
	],
};

export const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state, { payload }) => {
			state.todos = [...state.todos, payload];
		},
		deleteTodo: (state, { payload: todoId }) => {
			state.todos = state.todos.filter((todo) => todo.id !== todoId);
		},
		changeTodoState: (state, { payload: todoId }) => {
			state.todos = state.todos.map((todo) =>
				todo.id === todoId
					? { ...todo, isCompleted: !todo.isCompleted }
					: todo
			);
		},
		clearTodos: (state, action) => {
			state.todos = [];
		},
	},
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, clearTodos, changeTodoState } =
	todosSlice.actions;

export default todosSlice.reducer;
