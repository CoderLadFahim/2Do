import { useState } from 'react';

function AppNav() {
	const [todo, setTodo] = useState('');

	const addTodo = (params) => {
		console.log(todo);
		setTodo('');
	};

	return (
		<nav>
			<button className="clear-btn">Clear</button>
			<input
				className="text-center"
				type="text"
				value={todo}
				placeholder="Add Todo"
				onChange={(e) => setTodo(e.target.value)}
			/>
			<button className="add-btn" onClick={addTodo}>
				Add
			</button>
		</nav>
	);
}

export default AppNav;
