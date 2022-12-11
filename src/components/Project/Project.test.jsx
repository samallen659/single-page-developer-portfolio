import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Project } from './Project';
import thumbnailSmall from '../../assets/images/thumbnail-project-1-small.webp';
import thumbnailLarge from '../../assets/images/thumbnail-project-1-large.webp';

describe('Project', () => {
	const data = {
		title: 'testTitle',
		technologies: ['html'],
	};
	it('renders the image container', () => {
		render(<Project title={data.title} technologies={data.technologies} />);
		expect(screen.getByTestId('image-container')).toBeTruthy();
	});
	it('renders the title prop capitialised', () => {
		const title = 'Test proJect';
		render(<Project title={title} technologies={data.technologies} />);
		expect(screen.getAllByText(title.toUpperCase())).toBeTruthy();
	});
	it('renders the thumnailLarge prop', () => {
		render(<Project title={data.title} thumbnailLarge={thumbnailLarge} technologies={data.technologies} />);
		expect(screen.getByTestId('image-large')).toHaveAttribute('src', thumbnailLarge);
	});
	it('renders the thumbnailSmall prop', () => {
		render(<Project title={data.title} thumbnailSmall={thumbnailSmall} technologies={data.technologies} />);
		expect(screen.getByTestId('image-small')).toHaveAttribute('src', thumbnailSmall);
	});
	it('renders the technologies array', () => {
		const tech = ['html', 'css'];
		render(<Project title={data.title} technologies={tech} />);
		expect(screen.getByTestId('tech-container').querySelectorAll('p').length).toBe(2);
	});
	it('renders the technology text', () => {
		const tech = ['html'];
		render(<Project title={data.title} technologies={tech} />);
		const capitailisedTech = tech.map((a) => a.toUpperCase());
		expect(screen.getByTestId('tech-container').querySelector('p')).toHaveTextContent('HTML');
	});
});
