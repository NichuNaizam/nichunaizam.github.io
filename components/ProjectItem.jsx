import React from 'react';

export default function ProjectItem({ name, description, link }) {
	return (
		<li className='text-white bg-blue-500 text-center text-2xl mb-2 w-96 p-6 h-48 border-2 rounded-lg inline-block m-6'>
			{name}
			<br />
			<p className='text-xl mb-4'>{description}</p>
			<a
				className='py-2 px-4 rounded-md text-xl bg-green-600 hover:bg-green-400 transition-all ease-linear delay-75'
				href={link}>
				View
			</a>
		</li>
	);
}
