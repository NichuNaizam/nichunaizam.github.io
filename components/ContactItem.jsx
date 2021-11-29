import React from 'react';

export default function ContactItem({ src, alt, name }) {
	return (
		<li className='flex mb-4'>
			<img src={src} alt={alt} width='50px' className='inline-block' />
			<p className='text-white mt-3 ml-3 text-xl'>{name}</p>
		</li>
	);
}
