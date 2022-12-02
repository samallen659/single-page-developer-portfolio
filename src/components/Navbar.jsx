import React from 'react';
import { githubIcon } from '../assets/images/icon-github.svg';
import { frontendMentorIcon } from '../assets/images/icon-frontend-mentor.svg';
import { linkedinIcon } from '../assets/images/icon-linkedin.svg';
import { twitterIcon } from '../assets/images/icon-twitter.svg';

const Navbar = () => {
	return (
		<nav data-testid='navbar' className='flex justify-between'>
			<h4>adamkeyes</h4>
			<div data-testid='links'>
				<a href='https://github.com'>
					<img src={githubIcon} alt='github' />
				</a>
				<a href='https://frontendmentor.com'>
					<img src={frontendMentorIcon} alt='frontendmentor' />
				</a>
				<a href='https://linkedin.com'>
					<img src={linkedinIcon} alt='linkedin' />
				</a>
				<a href='https://twitter.com'>
					<img src={twitterIcon} alt='twitter' />
				</a>
			</div>
		</nav>
	);
};

export { Navbar };
