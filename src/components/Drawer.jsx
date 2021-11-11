import React from 'react'
import Link from 'next/link'
import drawerStyles from '../../styles/Drawer.module.css'

export default function Drawer({ show }) {
  return (
    <aside className={drawerStyles.drawer} show={show.toString()}>
      <nav>
        <ul>
          <li>
            <Link href='/projects'>projects</Link>
          </li>
          <li>
            <Link href='/'>home</Link>
          </li>
          <li>
            <a href='../public/resume.pdf'>resume</a>
          </li>
          <li>
            <a href="https://github.com/CullenSharp" target="_blank" rel="noopener noreferrer">github↗</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/cullensharp/" target="_blank" rel="noopener noreferrer">linkedin↗</a>
          </li>
          <li>
            <a href="https://www.are.na/cullen-sharp" target="_blank" rel="noopener noreferrer">are.na↗</a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
