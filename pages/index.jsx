import React from 'react'
import pageStyles from '../styles/Page.module.css'

function Home() {
	return(
		<>
			<h1 className={pageStyles.title}>Cullen Sharp</h1>
			<p className={pageStyles.description}>
				<mark>Fullstack Web Developer</mark> with hands-on experience in the design and development of web applications from concept to release. Motivated self-starter focused on working at the intersection of art, design, and technology to create <mark>immersive</mark> and <mark>intuitive</mark> user experiences.
			</p>
		</>
	)
}

export default Home
