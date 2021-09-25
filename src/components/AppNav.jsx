import { useDispatch } from 'react-redux';
import { addTodo, clearTodos } from '../features/todos/todosSlice';
import { useState } from 'react';
import TodoTypeSelector from './TodoTypeSelector';

function AppNav({
	activeViewType,
	viewTypeUpdater,
	progressStatusTextGenerator,
	todosLength,
}) {
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
		<nav className="flex flex-col items-center">
			<div className="container text-center mt-4 flex gap-2 items-baseline justify-center mb-3 xl:mb-5">
				<button
					className="clear-btn p-2 rounded text-white nunito-bold outline-none bg-gray-300 text-gray-800  border-none"
					onClick={() => dispatch(clearTodos())}
				>
					Clear
				</button>
				<input
					className="text-center py-1  w-4/6 sm:w-1/2  bg-gray-500 text-white font-bold  rounded-md shadow text-base work-sans-bold outline-none"
					type="text"
					value={todo}
					placeholder="Add Todo"
					onChange={(e) => setTodo(e.target.value)}
					// Firing the todoAdder function if input value is truthy and user presses enter
					onKeyUp={(e) =>
						e.target.value && e.keyCode === 13 ? todoAdder() : ''
					}
				/>
				<button
					className="add-btn p-2 rounded text-white nunito-bold outline-none bg-green-400 border-none"
					onClick={todoAdder}
				>
					Add
				</button>
			</div>
			<TodoTypeSelector
				activeViewType={activeViewType}
				viewTypeUpdater={viewTypeUpdater}
			/>

			{todosLength ? progressStatusTextGenerator(activeViewType) : ''}
		</nav>
	);
}

export default AppNav;
