import React from 'react'
import ProjectItem from './ProjectItem'

export default function ProjectList({ projects }) {
  return (
    <>
      { projects.map(project => (
        <ProjectItem project={project} />
      ))}
    </>
  )
}
