import { useSelector } from 'react-redux';
import AppNav from './components/AppNav';
// import ProgressText from './components/ProgressText';
import Todo from './components/Todo';
import './App.css';

function App() {
	const todos = useSelector((state) => state.todos.todos);

	return (
		<div className="App">
			<AppNav />
			<div className="todos" data-testid="todos-container">
				{todos.length
					? todos.map((todo) => <Todo todo={todo} key={todo.id} />)
					: 'Nothing left to do'}
			</div>
		</div>
	);
}

export default App;
