import React from 'react'
import ReactTypingEffect from 'react-typing-effect';

import Navbar from '../components/Navbar/Navbar';


export default function index() {
    return (
		<div>
			<title>NichuNaizam - Home</title>

			<Navbar />
			<h1 className='text-6xl w-full text-center mt-52 text-white'>
				NichuNaizam
			</h1>
			<ReactTypingEffect
				className='flex items-center justify-center text-4xl mt-3 text-white'
				eraseSpeed='100'
				eraseDelay='1250'
				typingDelay='1250'
				text={[
					'React Developer',
					'Node.js Developer',
					'Electron.js Developer',
					'Web Developer',
					'Game Developer',
				]}
			/>
		</div>
    );
}
