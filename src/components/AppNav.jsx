import { useDispatch } from 'react-redux';
import { addTodo, clearTodos } from '../features/todos/todosSlice';
import { useState } from 'react';

function AppNav() {
	const dispatch = useDispatch();
	const [todo, setTodo] = useState('');

	const todoAdder = () => {
		if (!todo) return;
		const todoObj = { text: todo, id: Date.now() };
		dispatch(addTodo(todoObj));

		// setting input value to be en emtpy string after user adds a todo
		setTodo('');
	};

	return (
		<nav>
			<button className="clear-btn" onClick={() => dispatch(clearTodos())}>
				Clear
			</button>
			<input
				className="text-center"
				type="text"
				value={todo}
				placeholder="Add Todo"
				onChange={(e) => setTodo(e.target.value)}
				onKeyUp={(e) =>
					e.target.value && e.keyCode === 13 ? todoAdder() : ''
				}
			/>
			<button className="add-btn" onClick={todoAdder}>
				Add
			</button>
		</nav>
	);
}

export default AppNav;
