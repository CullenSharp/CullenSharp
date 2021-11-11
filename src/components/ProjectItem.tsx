import React from 'react'
import sanityClient from '../client'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import Image from 'next/image'
import projectItemStyles from '../../styles/ProjectItem.module.css'

const builder = imageUrlBuilder(sanityClient)

function urlFor(source: object) {
  return builder.image(source)
}

export default function ProjectItem({ project }) {
  const { id, mainImage, title, publishedAt, abstract, projectURL, repoURL } =
    project

  const imageUrl: string = urlFor(mainImage).toString()

  return (
    <article className={projectItemStyles.article} key={id}>
      <figure className={projectItemStyles.figure}>
        <Image
          className={projectItemStyles.Image}
          src={imageUrl}
          alt={title}
          width={860}
          height={500}
          objectFit="contain"
          placeholder="blur"
          blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMUnyxVDwAC0gFF8x/OjQAAAABJRU5ErkJggg=="
        />
      </figure>
      <section className={projectItemStyles.section}>
        <h2 className={projectItemStyles.title}>{title}</h2>
        <h3 className={projectItemStyles.subTitle}>
          {new Date(publishedAt).getFullYear()}
        </h3>
        <BlockContent blocks={abstract} />
        <nav className={projectItemStyles.nav}>
          <ul>
            <li>
              <a href={projectURL} target="_blank" rel="noreferrer">
                {'live demo ↗'}
              </a>
            </li>
            <li>
              <a href={repoURL} target="_blank" rel="noreferrer">
                {'repo ↗'}
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </article>
  )
}
