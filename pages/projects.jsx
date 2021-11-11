import React from 'react'
import sanityClient from '../src/client'
import ProjectList from '../src/components/ProjectList'
import pageStyles from '../styles/Page.module.css'

function Projects({ projects }) {
	return(
		<>
			<h2 className={pageStyles.title}>projects</h2>
			<h3 className={pageStyles.description}>serious solutions to serious problems. trust me.</h3>
			<ProjectList projects={projects} />
		</>
	)
}

export async function getStaticProps() {
	const projects = await sanityClient
		.fetch(
			`*[_type == "project"]{
				title,
				mainImage,
				slug,
				publishedAt,
				abstract,
				repoURL,
				projectURL
			}`
		)
		.then((data) => data)
		.catch((err) => console.error(err))

	return {
		props: {
			projects
		}
	}
}

export default Projects