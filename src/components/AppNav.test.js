import { render, screen, fireEvent } from '@testing-library/react';
import AppNav from './AppNav';
import { store } from '../app/store';
import { Provider } from 'react-redux';

describe('the input and the buttons functionalities', () => {
	it('should render todos with the given value from input', () => {
		render(
			<Provider store={store}>
				<AppNav />
			</Provider>
		);
		const inputEl = screen.getByPlaceholderText('Add Todo');

		expect(inputEl).toBeTruthy();
	});
});
