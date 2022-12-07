import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Skill } from './Skill';

describe('Skill', () => {
	it('renders a heading', () => {
		render(<Skill />);
		expect(screen.getAllByRole('heading')).toBeTruthy();
	});
	it('renders the title prop', () => {
		const title = 'Test';
		render(<Skill title={title} />);
		expect(screen.getAllByText(title)).toBeTruthy();
	});
	it('renders the years of experience', () => {
		const years = 4;
		render(<Skill years={years} />);
		expect(screen.getByText(`${years} Years Experience`));
	});
});
