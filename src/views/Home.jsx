import React from 'react';
import { Link } from 'react-router-dom';
import resume from '../assets/resume.pdf';

function Home() {
	return(
		<div className='view'>
			<h1 className='title'>Cullen Sharp</h1>
			<p className='intro'>
				<mark className='highlight'>Fullstack Web Developer</mark> with hands-on experience in the design and development of web applications from concept to release. Motivated self-starter focused on working at the intersection of art, design, and technology to create <mark>immersive</mark> and <mark>intuitive</mark> user experiences.
			</p>
			<nav>
				<ul className='mb-2'>
					<li>
						<Link to='/Writings'>📓 writings</Link>
					</li>
					<li>
						<Link to='/Projects'>💼 projects</Link>
					</li>
					<li>
						<a href={resume}>📝 resume</a>
					</li>
				</ul>
				<ul>
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
			</nav>
		</ div>
	);
}

export default Home;
