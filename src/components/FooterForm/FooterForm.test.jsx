import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { describe, expect, it, vi } from 'vitest';
import { FooterForm } from './FooterForm';

describe('FooterForm', () => {
	const expectInputField = (name) => {
		return it(`renders the ${name} field`, () => {
			render(<FooterForm />);
			expect(screen.getByTestId(`${name}-input`)).toBeTruthy();
		});
	};
	it('renders a form', () => {
		render(<FooterForm />);
		expect(screen.getByTestId('form')).toBeTruthy();
	});
	expectInputField('name');
	expectInputField('email');
	expectInputField('message');
	it('calls onSubmit with valid inputs', async () => {
		const spyOnSubmit = vi.fn();
		render(<FooterForm onSubmit={spyOnSubmit} />);

		await act(async () => {
			fireEvent.change(screen.getByTestId('name-input'), { target: { value: 'Sam' } });
			fireEvent.change(screen.getByTestId('email-input'), { target: { value: 'Sam@email.com' } });
			fireEvent.change(screen.getByTestId('message-input'), { target: { value: 'This is a message' } });
		});

		await act(async () => {
			fireEvent.click(screen.getByRole('button'));
		});

		expect(spyOnSubmit).toHaveBeenCalled();
	});
	it('does not call onSubmit with invalid email', async () => {
		const spyOnSubmit = vi.fn();
		render(<FooterForm onSubmit={spyOnSubmit} />);

		await act(async () => {
			fireEvent.change(screen.getByTestId('name-input'), { target: { value: 'Sam' } });
			fireEvent.change(screen.getByTestId('email-input'), { target: { value: 'invalid' } });
			fireEvent.change(screen.getByTestId('message-input'), { target: { value: 'This is a message' } });
		});

		await act(async () => {
			fireEvent.click(screen.getByRole('button'));
		});

		expect(spyOnSubmit).not.toHaveBeenCalled();
	});
	it('does not call onSubmit with no name', async () => {
		const spyOnSubmit = vi.fn();
		render(<FooterForm onSubmit={spyOnSubmit} />);

		await act(async () => {
			fireEvent.change(screen.getByTestId('email-input'), { target: { value: 'Sam@email.com' } });
			fireEvent.change(screen.getByTestId('message-input'), { target: { value: 'This is a message' } });
		});

		await act(async () => {
			fireEvent.click(screen.getByRole('button'));
		});

		expect(spyOnSubmit).not.toHaveBeenCalled();
	});
	it('does not call onSubmit with no message', async () => {
		const spyOnSubmit = vi.fn();
		render(<FooterForm onSubmit={spyOnSubmit} />);

		await act(async () => {
			fireEvent.change(screen.getByTestId('name-input'), { target: { value: 'Sam' } });
			fireEvent.change(screen.getByTestId('email-input'), { target: { value: 'Sam@email.com' } });
		});

		await act(async () => {
			fireEvent.click(screen.getByRole('button'));
		});

		expect(spyOnSubmit).not.toHaveBeenCalled();
	});
});
