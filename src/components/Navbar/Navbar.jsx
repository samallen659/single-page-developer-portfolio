import React from 'react';
import githubIcon from '../../assets/images/icon-github.svg';
import frontendMentorIcon from '../../assets/images/icon-frontend-mentor.svg';
import linkedinIcon from '../../assets/images/icon-linkedin.svg';
import twitterIcon from '../../assets/images/icon-twitter.svg';

const Navbar = () => {
	return (
		<nav data-testid='navbar' className='flex flex-col md:flex-row pt-5 md:justify-between items-center absolute w-full z-50'>
			<h4 className='text-white text-2xl pb-5 font-bold md:text-3xl'>adamkeyes</h4>
			<div data-testid='links' className='flex gap-6'>
				<a href='https://github.com'>
					<img src={githubIcon} alt='github' className='w-5 h-5 md:w-6 md:h-6' />
				</a>
				<a href='https://frontendmentor.com'>
					<img src={frontendMentorIcon} alt='frontendmentor' className='w-5 h-5 md:w-6 md:h-6' />
				</a>
				<a href='https://linkedin.com'>
					<img src={linkedinIcon} alt='linkedin' className='w-5 h-5 md:w-6 md:h-6' />
				</a>
				<a href='https://twitter.com'>
					<img src={twitterIcon} alt='twitter' className='w-5 h-5 md:w-6 md:h-6' />
				</a>
			</div>
		</nav>
	);
};

export { Navbar };
