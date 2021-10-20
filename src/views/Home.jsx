import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
	return(
		<section>
			<h1>Cullen Sharp</h1>
			<p>
				<mark>Fullstack Web Developer</mark> with hands-on experience in the design and development of web applications from concept to release. Motivated self-starter focused on working at the intersection of art, design, and technology to create <mark>immersive</mark> and <mark>intuitive</mark> user experiences.
			</p>
			<nav>
				<ul>
					<li>
						<a href="https://github.com/CullenSharp">github,</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/in/cullensharp/">linkedin,</a>
					</li>
					<li>
						<a href="https://www.are.na/cullen-sharp">are.na,</a>
					</li>
					<li>
						<Link to='/Writings'>
                writing
						</Link>
					</li>
				</ul>
			</nav>
		</section>
	);
}

export default Home;
