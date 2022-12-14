import React, { useState } from 'react';
import { Button } from '../Button/Button';

const FooterForm = ({ onSubmit }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit();
	};

	return (
		<form data-testid='form' onSubmit={handleSubmit}>
			<label htmlFor='name'>Name</label>
			<input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} required />
			<div className='w-full border-b border-neutral-dark'></div>
			<label htmlFor='email'>Email</label>
			<input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
			<div className='w-full border-b border-neutral-dark'></div>
			<label htmlFor='message'>Message</label>
			<input type='textarea' id='message' value={message} onChange={(e) => setMessage(e.target.value)} required />
			<div className='w-full border-b border-neutral-dark'></div>
			<input
				role='button'
				type='submit'
				value='SEND MESSAGE'
				className='text-white underline decoration-secondary underline-offset-8 hover:text-secondary md:text-lg'
			/>
		</form>
	);
};

export { FooterForm };
