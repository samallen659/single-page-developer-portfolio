import React from 'react';

const Button = ({ text, href }) => {
	return (
		<a data-testid='button' href={href} className='text-white underline decoration-secondary underline-offset-8 md:text-lg'>
			{text.toUpperCase()}
		</a>
	);
};

export { Button };
