import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const FooterForm = ({ onSubmit }) => {
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			message: '',
		},
		validationSchema: Yup.object({
			name: Yup.string().max(30).required(),
			email: Yup.string().email().required(),
			message: Yup.string().max(300).required(),
		}),
		onSubmit: (values) => {
			onSubmit();
		},
	});

	console.log(formik.errors);

	return (
		<form data-testid='form' onSubmit={formik.handleSubmit}>
			<input
				data-testid='name-input'
				type='text'
				id='name'
				value={formik.values.name}
				onChange={formik.handleChange}
				placeholder='NAME'
				className='border-none bg-primary ring-0'
			/>
			<div className='w-full border-b border-neutral-dark'></div>
			<input
				data-testid='email-input'
				type='email'
				id='email'
				value={formik.values.email}
				onChange={formik.handleChange}
				placeholder='EMAIL'
				className='bg-primary'
			/>
			<div className='w-full border-b border-neutral-dark'></div>
			<input
				data-testid='message-input'
				type='textarea'
				id='message'
				value={formik.values.message}
				onChange={formik.handleChange}
				placeholder='MESSAGE'
				className='bg-primary'
			/>
			<div className='w-full border-b border-neutral-dark'></div>
			<button
				type='submit'
				className='text-white underline decoration-secondary underline-offset-8 hover:text-secondary md:text-lg'>
				SEND MESSAGE
			</button>
		</form>
	);
};

export { FooterForm };
