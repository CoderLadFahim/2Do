import { faTrash, faCheck, faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Todo({ todo }) {
	return (
		<div className="todo">
			<p>{todo.text}</p>
			<FontAwesomeIcon icon={todo.isCompleted ? faRedoAlt : faCheck} />
			<FontAwesomeIcon icon={faTrash} />
		</div>
	);
}

export default Todo;
