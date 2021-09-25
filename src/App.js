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

	const generateProgressStatusText = () => {
		const numOfCompletedTodos = todos.filter(
			(todo) => todo.isCompleted
		).length;
		const numOfTodos = todos.length;
		const numOfIncompleteTodos = numOfTodos - numOfCompletedTodos;

		if (numOfIncompleteTodos === 0) return;

		if (viewType === 'all')
			return (
				<h2>
					<span>{numOfCompletedTodos}</span> out of{' '}
					<span>{numOfTodos}</span> todos done
				</h2>
			);
		if (viewType === 'done')
			return (
				<h2>
					<span>{numOfCompletedTodos}</span> todos done
				</h2>
			);
		if (viewType === 'left')
			return (
				<h2>
					<span>{numOfIncompleteTodos}</span> todos left
				</h2>
			);
	};

	return (
		<div className="App">
			<AppNav
				activeViewType={viewType}
				viewTypeUpdater={(newType) => setViewType(newType)}
				progressStatusTextGenerator={generateProgressStatusText}
				todosLength={todos.length}
			/>
			<TodoTypeSelector
				activeViewType={viewType}
				viewTypeUpdater={(newType) => setViewType(newType)}
			/>

			{todos.length ? generateProgressStatusText(viewType) : ''}

			<div className="todos" data-testid="todos-container">
				{todos.length ? renderTodos(viewType) : 'Nothing left to do'}
			</div>
		</div>
	);
}

export default App;
