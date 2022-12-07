import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import photoMobile from '../../assets/images/image-profile-mobile.webp';
import photoTablet from '../../assets/images/image-profile-tablet.webp';
import photoDesktop from '../../assets/images/image-profile-desktop.webp';
import circlePattern from '../../assets/images/pattern-circle.svg';
import ringsPattern from '../../assets/images/pattern-rings.svg';
import { Button } from '../Button/Button';

const Hero = () => {
	return (
		<div className='relative w-full'>
			<Navbar />
			<img src={ringsPattern} alt='' className='absolute w-[530px] h-[129px] left-[-230px] top-[124px] opacity-25' />
			<div className='z-0 relative'>
				<img src={photoMobile} alt='' className='absolute left-1/2 transform -translate-x-1/2 w-44 h-96 md:hidden' />
				<img src={photoTablet} alt='' className='absolute right-0 max-w-xs max-h-[600px] hidden md:block lg:hidden' />
				<img src={photoDesktop} alt='' className='absolute right-0 max-w-[445px] max-h-[720px] hidden lg:block' />
			</div>
			<img
				src={circlePattern}
				alt=''
				className='absolute w-[129px] h-[129px] right-[-65px] top-[254px] md:right-[-100px]'
			/>
			<div className='pt-[423px] z-50 md:pt-[151px] relative md:max-w-[445px] lg:max-w-[706px]'>
				<h1 className='text-white font-bold text-[40px] text-center md:hidden lg:block lg:text-[88px]'>
					Nice to meet you!
					<br />
					I'm <span className='underline decoration-secondary underline-offset-8 md:text-left'>Adam Keyes</span>.
				</h1>
				<h1 className='text-white font-bold text-left text-[70px] hidden md:block lg:hidden'>
					Nice to <br />
					meet you! I'm <span className='underline decoration-secondary underline-offset-8'>Adam Keyes</span>.
				</h1>
				<p className='text-neutral-light text-center py-6 text-lg md:text-left md:max-w-[445px]'>
					Based in the UK, I'm a front-end developer passionate about building accessible web apps that users love.
				</p>
				<div className='flex justify-center md:block'>
					<Button text='contact me' href='#' />
				</div>
			</div>
		</div>
	);
};

export { Hero };
