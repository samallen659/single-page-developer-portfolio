import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Project } from './Project';
import thumbnailSmall from '../../assets/images/thumbnail-project-1-small.webp';
import thumbnailLarge from '../../assets/images/thumbnail-project-1-large.webp';

describe('Project', () => {
	const data = {
		title: 'testTitle',
	};
	it('renders the image container', () => {
		render(<Project title={data.title} />);
		expect(screen.getByTestId('image-container')).toBeTruthy();
	});
	it('renders the title prop capitialised', () => {
		const title = 'Test proJect';
		render(<Project title={title} />);
		expect(screen.getAllByText(title.toUpperCase())).toBeTruthy();
	});
	it('renders the thumnailLarge prop', () => {
		render(<Project title={data.title} thumbnailLarge={thumbnailLarge} />);
		expect(screen.getByTestId('image-large')).toHaveAttribute('src', thumbnailLarge);
	});
	it('renders the thumbnailSmall prop', () => {
		render(<Project title={data.title} thumbnailSmall={thumbnailSmall} />);
		expect(screen.getByTestId('image-small')).toHaveAttribute('src', thumbnailSmall);
	});

});
