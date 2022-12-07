import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
	const defaultData = {
		text: '',
		href: '#',
	};
	it('renders a button', () => {
		render(<Button {...defaultData} />);
		expect(screen.getByTestId('button')).toBeTruthy();
	});
	it('renders the text prop capitalised', () => {
		const text = 'ButtonText';
		render(<Button text={text} />);
		expect(screen.getByText(text.toUpperCase())).toBeTruthy();
	});
	it('sets the href property via prop', () => {
		const href = 'https://www.test.com';
		render(<Button text={defaultData.text} href={href} />);
		expect(screen.getByRole('link')).toHaveAttribute('href', href);
	});
});
