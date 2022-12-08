import React from 'react';

const Skill = ({ title, years }) => {
	return (
		<div>
			<h3 className='text-center text-white font-bold text-[32px] md:text-[56px] md:text-left'>{title}</h3>
			<p className='text-center text-neutral-light md:text-lg md:text-left'>{`${years} Years Experience`}</p>
		</div>
	);
};

export { Skill };
