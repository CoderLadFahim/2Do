import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todosReducer/todosSlice';

export const store = configureStore({
	reducer: {
		todos: todosReducer
	},
});
