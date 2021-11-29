import React from 'react';
import ContactItem from '../components/ContactItem';

import Navbar from '../components/Navbar/Navbar';

export default function contact() {
	return (
		<div>
			<title>NichuNaizam - Contact</title>

			<Navbar />

			<div className='flex items-center justify-center min-h-screen'>
				<ul className='w-full max-w-md bg-blue-600 p-10 rounded-3xl'>
					<ContactItem
						src='/github.svg'
						alt='Github'
						name='NichuNaizam'
					/>
					<ContactItem
						src='/discord.svg'
						alt='Discord'
						name='NichuNaizam#1178'
					/>
					<ContactItem
						src='/gmail.svg'
						alt='Gmail'
						name='naizamaliz141@gmail.com'
					/>
				</ul>
			</div>
		</div>
	);
}
