import React from 'react'
import sanityClient from '../client'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import projectItemStyles from '../../styles/ProjectItem.module.css'

const builder = imageUrlBuilder(sanityClient)

function urlFor(source) {
	return builder.image(source)
}

export default function ProjectItem({ project }) {
  const {id, mainImage, title, publishedAt, abstract, projectURL, repoURL} = project;
  return(
    <article className={projectItemStyles.article} key={id}>
			<figure className={projectItemStyles.figure}>
				<img src={urlFor(mainImage).size(776,465)} alt={title} />
			</figure>
			<section className={projectItemStyles.section}>
				<h2 className={projectItemStyles.title}>{title}</h2>
				<h3 className={projectItemStyles.subTitle}>{new Date(publishedAt).getFullYear()}</h3>
				<BlockContent blocks={abstract} />
				<nav className={projectItemStyles.nav}>
					<ul>
						<li>
							<a href={project.projectURL} target='_blank' rel="noreferrer">{'live demo ↗'}</a>
						</li>
						<li>
							<a href={project.repoURL} target='_blank' rel="noreferrer">{'repo ↗'}</a>
						</li>
					</ul>
				</nav>
			</section>
		</article>
  )
}
