import React from 'react';
import { Button } from '../Button/Button';

const Project = ({ title, thumbnailLarge, thumbnailSmall }) => {
	return (
		<div>
			<div data-testid='image-container' className='relative group'>
				<img src={thumbnailLarge} alt={title} data-testid='image-large' className='hidden md:block' />
				<img src={thumbnailSmall} alt={title} data-testid='image-small' className='md:hidden' />
				<Button text='view project' className='hidden absolute group-hover:block' />
				<Button text='view code' className='hidden absolute group-hover:block' />
			</div>
			<h3>{title.toUpperCase()}</h3>
		</div>
	);
};

export { Project };
