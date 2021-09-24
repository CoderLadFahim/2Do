import { render, screen } from '@testing-library/react';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';

describe('Testing the behaviour of todosContainer', () => {
	it('Checks if initially todosContainer is empty', () => {
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
