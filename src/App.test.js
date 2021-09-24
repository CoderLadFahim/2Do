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

	it('should render todos with the given value from input', () => {
		render(
			<Provider store={store}>
				<App />
			</Provider>
		);

		const inputEl = screen.getByPlaceholderText('Add Todo');
		const addBtn = screen.getByText('Add');

		const givenTodoText = 'Do the dishes';
		fireEvent.change(inputEl, { target: { value: givenTodoText } });
		fireEvent.click(addBtn);
		const todoEl = screen.getByText(givenTodoText);

		expect(todoEl).toBeTruthy();
	});

	it('should clear all todos when clearBtn is clicked', () => {
		render(
			<Provider store={store}>
				<App />
			</Provider>
		);

		const clearBtn = screen.getByText('Clear');
		fireEvent.click(clearBtn);

		const todosContainer = screen.getByTestId('todos-container');
		const expectedText = 'Nothing left to do';
		const currentText = todosContainer.textContent;

		expect(currentText).toBe(expectedText);
	});
});
