import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Navbar } from './Navbar';

describe('Navbar', () => {
	const renderLink = (text) => {
		it(`renders a link for ${text}`, () => {
			render(<Navbar />);
			expect(screen.getByAltText(text)).not.toBeUndefined();
		});
	};
	it('renders a nav element', () => {
		render(<Navbar />);
		expect(screen.getAllByTestId('navbar')).not.toBeUndefined();
	});
	it('renders the heading', () => {
		render(<Navbar />);
		expect(screen.getAllByRole('heading')).not.toBeUndefined();
	});
	it('renders a div with data-testid links for the links', () => {
		render(<Navbar />);
		expect(screen.getAllByTestId('links')).not.toBeUndefined();
	});
	renderLink('github');
	renderLink('frontendmentor');
	renderLink('linkedin');
	renderLink('twitter');
});
