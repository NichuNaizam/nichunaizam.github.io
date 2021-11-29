import React from 'react';
import Link from 'next/link';

import NavbarItem from './NavbarItem';

export default function Navbar() {
	return (
		<header className='bg-blue-400 h-12'>
			<p className='text-white text-2xl pt-2 pl-2'>NichuNaizam</p>
			<nav className='flex items-center justify-center'>
				<ul className='absolute top-[6px] text-white text-lg'>
					<NavbarItem name='Home' link='/' />
					<NavbarItem name='About' link='/about' />
					<NavbarItem name='Projects' link='/projects' />
				</ul>
			</nav>
			<a className='absolute top-2 left-3/4 ml-64 bg-blue-600 px-4 py-1 rounded-md text-white hover:bg-blue-400 hover:rounded-sm transition-all ease-linear delay-75'>
				<Link href='contact'>Contact</Link>
			</a>
		</header>
	);
}
