import { useState } from 'react';
import { useSelector } from 'react-redux';
import AppNav from './components/AppNav';
import TodoTypeSelector from './components/TodoTypeSelector';
// import ProgressText from './components/ProgressText';
import Todo from './components/Todo';
import './App.css';

function App() {
	const todos = useSelector((state) => state.todos.todos);
	const [viewType, setViewType] = useState('all');

	const renderTodos = (type) => {
		switch (type) {
			case 'all':
				return todos.map((todo) => <Todo todo={todo} key={todo.id} />);
			case 'done':
				return todos.map(
					(todo) => todo.isCompleted && <Todo todo={todo} key={todo.id} />
				);
			case 'left':
				return todos.map(
					(todo) => !todo.isCompleted && <Todo todo={todo} key={todo.id} />
				);
			default:
				return 'Something went wrong';
		}
	};

	return (
		<div className="App">
			<AppNav />
			<TodoTypeSelector
				activeViewType={viewType}
				viewTypeUpdater={(newType) => setViewType(newType)}
			/>

			<div className="todos" data-testid="todos-container">
				{todos.length ? renderTodos(viewType) : 'Nothing left to do'}
			</div>
		</div>
	);
}

export default App;
