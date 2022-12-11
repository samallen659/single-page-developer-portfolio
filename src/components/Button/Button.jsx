import React from 'react';

const Button = ({ text, href }) => {
	return (
		<a
			data-testid='button'
			href={href ? href : '#'}
			className='text-white underline decoration-secondary underline-offset-8 md:text-lg hover:text-secondary'>
			{text.toUpperCase()}
		</a>
	);
};

export { Button };
