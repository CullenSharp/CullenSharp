import React from 'react'
import sanityClient from '../src/client'
import ProjectList from '../src/components/ProjectList'

function Projects({ projects }) {
	return(
		<>
			<h2 className='text-[#131313] dark:text-[#FDFDFD] text-5xl font-display tracking-tighter mt-32 lg:mt-48'>projects</h2>
			<h3 className='text-[#131313] dark:text-[#FDFDFD] mb-5 text-base font-body lg:mb-60'>serious solutions to serious problems. trust me.</h3>
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