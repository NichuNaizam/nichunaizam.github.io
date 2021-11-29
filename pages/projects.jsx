import React from 'react'

import ProjectItem from '../components/ProjectItem';
import Navbar from '../components/Navbar/Navbar';

export default function projects() {
    return (
		<div>
			<title>NichuNaizam - Projects</title>

			<Navbar />

			<div className='flex items-center justify-center min-h-screen'>
				<ul className='w-full max-w-5xl bg-blue-600 p-10 rounded-3xl'>
					<ProjectItem
						name='ViewBot'
						description='An app made with Electron.js which allows you to chat as a discord bot!'
						link='https://github.com/NichuNaizam/ViewBot'
					/>
					<ProjectItem
						name='TodoApp'
						description='A basic todo app made with Electron.js'
						link='https://github.com/NichuNaizam/electron-todo-app'
					/>
					<ProjectItem
						name='My personal website'
						description='A personal website made with Next.js(React framework)'
						link='https://github.com/NichuNaizam/nichunaizam.github.io'
					/>
				</ul>
			</div>
		</div>
    );
}
