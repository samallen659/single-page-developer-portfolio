import React from 'react';
import { Skill } from '../Skill/Skill';

const Skills = () => {
	const skillData = [
		{ title: 'HTML', years: 4 },
		{ title: 'CSS', years: 4 },
		{ title: 'Javascript', years: 4 },
		{ title: 'Accessibility', years: 4 },
		{ title: 'React', years: 3 },
		{ title: 'Sass', years: 3 },
	];
	return (
		<div className='mt-[80px] grid grid-cols-1 items-center justify-center gap-6 border-y-2 border-neutral-light py-10 md:grid-cols-2 md:gap-[52px] md:border-y-0 md:border-t-2 lg:mt-[219px]'>
			{skillData.map((skill, index) => (
				<Skill key={index} title={skill.title} years={skill.years} />
			))}
		</div>
	);
};

export { Skills };
