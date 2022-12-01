import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Navbar } from './Navbar';

describe('Navvbar', () => {
	test('renders a nav element', () => {
		render(<Navbar />);
		expect(screen.getAllByTestId('navbar')).not.toBeUndefined();
	});
});
