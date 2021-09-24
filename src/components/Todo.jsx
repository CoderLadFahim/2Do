import { faTrash, faCheck, faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useDispatch } from 'react-redux';
import { deleteTodo } from '../features/todos/todosSlice';

function Todo({ todo }) {
	const dispatch = useDispatch();

	const todoDeleter = (params) => {
		dispatch(deleteTodo(todo.id));
	};

	return (
		<div className="todo">
			<p>{todo.text}</p>
			<FontAwesomeIcon icon={todo.isCompleted ? faRedoAlt : faCheck} />
			<FontAwesomeIcon icon={faTrash} onClick={todoDeleter} />
		</div>
	);
}

export default Todo;
