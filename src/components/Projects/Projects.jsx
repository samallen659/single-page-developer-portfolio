import React from 'react';
import { Button } from '../Button/Button';
import { Project } from '../Project/Project';
import { projectData } from '../../projectData';

const Projects = () => {
	return (
		<div>
			<div className='flex items-center justify-between pb-8'>
				<h2 className='text-[40px] font-bold text-white md:text-[72px]'>Projects</h2>
				<Button text='contact me' />
			</div>
			<div className='grid grid-cols-1 gap-10 md:grid-cols-2'>
				{projectData.map((project, index) => (
					<Project key={index} {...project} />
				))}
			</div>
		</div>
	);
};

export { Projects };
