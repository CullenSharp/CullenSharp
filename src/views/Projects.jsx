import React, { useState, useEffect } from 'react';
import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
	return builder.image(source);
}

function Projects() {
	const [posts, setPosts] = useState(null);

	useEffect(() => {
		sanityClient
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
			.then((data) => setPosts(data))
			.catch(console.error);
	});

	return(
		<div className='view'>
			<h2 className='text-[#131313] dark:text-[#FDFDFD] text-5xl font-display tracking-tighter mt-32 lg:mt-48'>projects</h2>
			<h3 className='text-[#131313] dark:text-[#FDFDFD] mb-5 text-base font-body lg:mb-60'>serious solutions to serious problems. trust me.</h3>
			{ posts?.map(({ _id, title, mainImage, publishedAt, abstract, projectURL, repoURL}) => (
				<article className='mb-12 overflow-scroll lg:flex' key={_id}>
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
									<a href={projectURL} target='_blank' rel="noreferrer">{projectURL.slice(8)+'↗'}</a>
								</li>
								<li>
									<a href={repoURL} target='_blank' rel="noreferrer">{repoURL.slice(8)+'↗'}</a>
								</li>
							</ul>
						</nav>
					</section>
				</article>
			))}
		</div>
	);
}

export default Projects;