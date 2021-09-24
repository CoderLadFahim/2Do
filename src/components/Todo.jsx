import { faTrash, faCheck, faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useDispatch } from 'react-redux';
import { deleteTodo, changeTodoState } from '../features/todos/todosSlice';

function Todo({ todo }) {
	const dispatch = useDispatch();

	const todoDeleter = () => dispatch(deleteTodo(todo.id));

	const todoStateChanger = () => dispatch(changeTodoState(todo.id));

	return (
		<div className="todo">
			<p role="todo-text">{todo.text}</p>
			<FontAwesomeIcon
				icon={todo.isCompleted ? faRedoAlt : faCheck}
				onClick={todoStateChanger}
			/>
			<FontAwesomeIcon icon={faTrash} onClick={todoDeleter} />
		</div>
	);
}

export default Todo;
