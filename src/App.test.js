import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';

describe('the testing the behaviour of todosContainer', () => {
	it('should render an empty message initially', () => {
		render(
			<Provider store={store}>
				<App />
			</Provider>
		);

		const todosContainer = screen.getByTestId('todos-container');
		const expectedText = 'Nothing left to do';
		const currentText = todosContainer.textContent;

		expect(currentText).toBe(expectedText);
	});
});
