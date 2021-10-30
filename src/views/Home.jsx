import React from 'react';
import resume from '../assets/resume.pdf';
import { Link } from 'react-router-dom';

function Home() {
	return(
		<div className='view'>
			<h1 className='text-[#131313] dark:text-[#FDFDFD] font-display mt-26 tracking-tighter text-5xl mb-7 lg:mb-14 lg:text-8xl'>Cullen Sharp</h1>
			<p className='font-body border-b-2 border-[#131313] dark:border-[#FDFDFD] pb-8 mb-8 tracking-wide text-base lg:text-4xl lg:tracking-tight'>
				<mark>Fullstack Web Developer</mark> with hands-on experience in the design and development of web applications from concept to release. Motivated self-starter focused on working at the intersection of art, design, and technology to create <mark>immersive</mark> and <mark>intuitive</mark> user experiences.
			</p>
			<nav>
				<ul className='mb-2'>
					<li>
						<a href="https://github.com/CullenSharp" target="_blank" rel="noopener noreferrer">💻 github↗</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/cullensharp/" target="_blank" rel="noopener noreferrer">🗄 linkedin↗</a>
					</li>
					<li>
						<a href="https://www.are.na/cullen-sharp" target="_blank" rel="noopener noreferrer">*️⃣ are.na↗</a>
					</li>
				</ul>
				<ul className='mb-2'>
					<li>
						<a href={resume}>📝 resume</a>
					</li>
					<li>
						<Link to='/Projects'>💼 projects</Link>
					</li>
				</ul>
			</nav>
		</ div>
	);
}

export default Home;
