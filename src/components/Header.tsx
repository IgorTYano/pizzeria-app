import './Header.css';
import React from 'react';
import logo from '../assets/img/logo-white.png';

const Header = () => {
	return (
		<div className='header__container'>
			<img src={logo} alt='pizzeria logo' className='header__logo' />
			<ul>
				<a href=''>
					<li>Home</li>
				</a>
				<a href=''>
					<li>About</li>
				</a>
				<a href=''>
					<li></li>
				</a>
				<a href=''>
					<li></li>
				</a>
			</ul>
		</div>
	);
};

export default Header;
