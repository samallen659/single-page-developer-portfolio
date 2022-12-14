import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { describe, expect, it, vi } from 'vitest';
import { FooterForm } from './FooterForm';

describe('FooterForm', () => {
	const expectFieldByRole = (role, name) => {
		const nameRegEx = new RegExp(name, 'i');
		return it(`renders the ${name} field`, () => {
			render(<FooterForm />);
			expect(screen.getByRole(role, { name: nameRegEx })).toBeTruthy();
		});
	};
	it('renders a form', () => {
		render(<FooterForm />);
		expect(screen.getByTestId('form')).toBeTruthy();
	});
	expectFieldByRole('textbox', 'name');
	expectFieldByRole('textbox', 'email');
	expectFieldByRole('textbox', 'message');
	it('calls onSubmit with valid inputs', async () => {
		const spyOnSubmit = vi.fn();
		render(<FooterForm onSubmit={spyOnSubmit} />);

		await act(async () => {
			fireEvent.change(screen.getByRole('textbox', { name: /name/i }), { target: { value: 'Sam' } });
			fireEvent.change(screen.getByRole('textbox', { name: /email/i }), { target: { value: 'Sam@email.com' } });
			fireEvent.change(screen.getByRole('textbox', { name: /message/i }), { target: { value: 'This is a message' } });
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
			fireEvent.change(screen.getByRole('textbox', { name: /name/i }), { target: { value: 'Sam' } });
			fireEvent.change(screen.getByRole('textbox', { name: /email/i }), { target: { value: 'invalid' } });
			fireEvent.change(screen.getByRole('textbox', { name: /message/i }), { target: { value: 'This is a message' } });
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
			fireEvent.change(screen.getByRole('textbox', { name: /email/i }), { target: { value: 'Sam@email.com' } });
			fireEvent.change(screen.getByRole('textbox', { name: /message/i }), { target: { value: 'This is a message' } });
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
			fireEvent.change(screen.getByRole('textbox', { name: /name/i }), { target: { value: 'Sam' } });
			fireEvent.change(screen.getByRole('textbox', { name: /email/i }), { target: { value: 'Sam@email.com' } });
		});

		await act(async () => {
			fireEvent.click(screen.getByRole('button'));
		});

		expect(spyOnSubmit).not.toHaveBeenCalled();
	});
});
