import React from 'react';
import { IoCart, IoLogIn, IoLogOut } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

const navLinkClass =
	'text-white m-2 p-1 duration-150 rounded-xs border-b border-b-transparent hover:bg-[#1e1e1e] hover:text-white hover:border-b-amber-400 hover:cursor-pointer';
const iconButtonClass =
	'flex items-center justify-center text-white m-2 p-2 rounded-full hover:bg-[#1e1e1e] hover:text-amber-400 transition-colors hover:cursor-pointer';

let isLoggedIn: boolean = false;

const Header = () => {
	return (
		<header className='h-14 bg-[#191919] flex justify-between items-center px-4 font-[Fairplay]'>
			<img
				src='/images/logo-white.webp'
				alt='pizzeria logo'
				className='h-10'
			/>
			<nav className='flex items-center text-lg'>
				<NavLink to='/' className={navLinkClass}>
					Home
				</NavLink>
				<NavLink to='/menu' className={navLinkClass}>
					Menu
				</NavLink>
				<NavLink to='/contact' className={navLinkClass}>
					Contact
				</NavLink>
			</nav>
			<div className='flex items-center space-x-2'>
				<button className={iconButtonClass} aria-label='Shopping Cart'>
					<IoCart className='text-xl' />
				</button>
				<button
					className={iconButtonClass}
					aria-label={isLoggedIn ? 'Logout' : 'Login'}
				>
					{isLoggedIn ? (
						<IoLogOut className='text-xl' />
					) : (
						<IoLogIn className='text-xl' />
					)}
				</button>
			</div>
		</header>
	);
};

export default Header;
