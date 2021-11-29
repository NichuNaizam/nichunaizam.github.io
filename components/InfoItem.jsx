import React from 'react'

export default function InfoItem({ question, answer }) {
    return (
		<li className='text-white text-2xl mb-2'>
			{question}{':'}
            <br />
            <p className='text-yellow-300'>{answer}</p>
		</li>
    );
}
