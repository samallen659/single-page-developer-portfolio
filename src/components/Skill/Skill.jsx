import React from 'react';

const Skill = ({ title, years }) => {
	return (
		<div>
			<h1>{title}</h1>
			<p>{`${years} Years Experience`}</p>
		</div>
	);
};

export { Skill };
