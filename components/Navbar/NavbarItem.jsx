import React from 'react';
import Link from 'next/link';

export default function NavbarItem({ name, link }) {
	return (
		<li className='inline-block mx-3 px-4 py-1 w-auto bg-blue-600 rounded-md hover:bg-blue-400 hover:rounded-sm transition-all ease-linear delay-75'>
			<Link href={link}>
                {name}
            </Link>
		</li>
	);
}
