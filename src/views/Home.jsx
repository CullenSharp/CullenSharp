import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
	return(
		<div className='view'>
			<h1 className='title'>Cullen Sharp</h1>
			<p className='intro'>
				<mark className='highlight'>Fullstack Web Developer</mark> with hands-on experience in the design and development of web applications from concept to release. Motivated self-starter focused on working at the intersection of art, design, and technology to create <mark>immersive</mark> and <mark>intuitive</mark> user experiences.
			</p>
			<nav>
				<ul>
					<li>
						<a href="https://github.com/CullenSharp" target='_blank' rel="noreferrer">💻 github↗</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/cullensharp/" target='_blank' rel="noreferrer">🗄 linkedin↗</a>
					</li>
					<li>
						<a href="https://www.are.na/cullen-sharp" target='_blank' rel="noreferrer">*️⃣ are.na↗</a>
					</li>
					<li>
						<Link to='/Writings'>
							📓 writings
						</Link>
					</li>
				</ul>
			</nav>
		</ div>
	);
}

export default Home;
