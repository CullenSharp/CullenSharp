import React from 'react'
import Link from 'next/link'
import navStyles from '../../styles/Nav.module.css'

export default function Nav() {
  return (
    <nav className={navStyles.nav}>
			<ul>
				<li>
					<a href="https://github.com/CullenSharp" target="_blank" rel="noopener noreferrer">💻 github↗</a>
				</li>
				<li>
					<a href="https://www.linkedin.com/in/cullensharp/" target="_blank" rel="noopener noreferrer">🗄 linkedin↗</a>
				</li>
				<li>
					<a href="https://www.are.na/cullen-sharp" target="_blank" rel="noopener noreferrer">*️⃣ are.na↗</a>
				</li>
				<li>
					<a href='../public/resume.pdf'>📝 resume</a>
				</li>
				<li>
					<Link href='/projects'>💼 projects</Link>
				</li>
			</ul>
		</nav>
  )
}


