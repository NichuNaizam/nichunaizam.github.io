import React from 'react';
import Link from 'next/link';

import InfoItem from '../components/InfoItem';
import Navbar from '../components/Navbar/Navbar';

export default function about() {
	return (
		<div>
			<title>NichuNaizam - About</title>

			<Navbar />

			<div className='flex items-center justify-center min-h-screen'>
				<ul className='w-full max-w-md bg-blue-600 p-10 rounded-3xl'>
					<InfoItem
						question='Name'
						answer='Naizam Ali Najad'
					/>
					<InfoItem question='Age' answer='13' />
					<InfoItem
						question='Languages'
						answer='Javascript, C++, Java, C#(Unity), HTML, CSS'
					/>
					<InfoItem
						question='My works'
						answer={<Link href='/projects'>Click here</Link>}
					/>
				</ul>
			</div>
		</div>
	);
}
