import React from 'react';
import { Button } from '../Button/Button';

const Project = ({ title, thumbnailLarge, thumbnailSmall, technologies }) => {
	return (
		<div>
			<div data-testid='image-container' className='group relative'>
				<img src={thumbnailLarge} alt={title} data-testid='image-large' className='hidden lg:block' />
				<img src={thumbnailSmall} alt={title} data-testid='image-small' className='lg:hidden' />
				<div className='absolute top-0 hidden h-full w-full bg-neutral-dark opacity-75 lg:group-hover:block'></div>
				<div className='absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 transform  text-center lg:group-hover:block'>
					<div className='flex flex-col gap-12'>
						<Button text='view project' />
						<Button text='view code' />
					</div>
				</div>
			</div>
			<h3 className='pt-5 text-2xl font-bold text-white'>{title.toUpperCase()}</h3>
			<div data-testid='tech-container' className='flex gap-5 pt-2 text-neutral-light'>
				{technologies.map((tech) => (
					<p key={tech}>{tech.toUpperCase()}</p>
				))}
			</div>
			<div className='flex gap-8 pt-5 lg:hidden'>
				<Button text='view project' />
				<Button text='view code' />
			</div>
		</div>
	);
};

export { Project };
