import React from 'react';
import { FooterForm } from '../FooterForm/FooterForm';

const Footer = () => {
	return (
		<div className='flex basis-1/2 flex-col py-4'>
			<div></div>
			<div>
				<FooterForm />
			</div>
		</div>
	);
};

export { Footer };
