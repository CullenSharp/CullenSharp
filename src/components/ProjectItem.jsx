import React from 'react'
import sanityClient from '../client'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'

const builder = imageUrlBuilder(sanityClient)

function urlFor(source) {
	return builder.image(source)
}

export default function ProjectItem({ project }) {
  const {id, mainImage, title, publishedAt, abstract, projectURL, repoURL} = project;
  return(
    <article className='mb-12 overflow-scroll lg:flex' key={id}>
			<figure>
				<img className='lg:mr-4 md:mr-4' src={urlFor(mainImage).size(776,465)} alt={title} />
			</figure>
			<section className='lg:w-1/2'>
				<h2 className='text-[#131313] dark:text-[#FDFDFD] text-5xl mb-2 mt-6 tracking-tighter font-body lg:font-display'>{title}</h2>
				<h3 className='text-[#131313] dark:text-[#FDFDFD] font-body mb-7 text-base lg:text-3xl lg:mb-10'>{new Date(publishedAt).getFullYear()}</h3>
				<BlockContent blocks={abstract} />
				<nav>
					<ul>
						<li>
							<a href={project.projectURL} target='_blank' rel="noreferrer">{projectURL.slice(8)+'↗'}</a>
						</li>
						<li>
							<a href={project.repoURL} target='_blank' rel="noreferrer">{repoURL.slice(8)+'↗'}</a>
						</li>
					</ul>
				</nav>
			</section>
		</article>
  )
}
