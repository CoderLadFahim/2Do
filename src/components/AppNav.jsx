import { useDispatch } from 'react-redux';
import { addTodo, clearTodos } from '../features/todos/todosSlice';
import { useState } from 'react';

function AppNav() {
	const dispatch = useDispatch();
	const [todo, setTodo] = useState('');

	const todoAdder = () => {
		if (!todo) return;
		// exiting the function if every character in todo is a number and resetting the input value
		if (todo.split('').every((ch) => typeof +ch === 'number' && !isNaN(+ch)))
			return setTodo('');

		const todoObj = { text: todo, id: Date.now(), isCompleted: false };
		dispatch(addTodo(todoObj));

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
				// Firing the todoAdder function if input value is truthy and user presses enter
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
