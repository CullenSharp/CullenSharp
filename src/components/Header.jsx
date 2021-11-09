import React from 'react'
import Slider from './Slider'
import Link from 'next/link'
import headerStyles from '../../styles/Header.module.css'

export default function Header() {
	return (
    <header className={headerStyles.header}>
      <Link href='/'>
        <h3 style={{cursor: 'pointer'}}>
          Home
        </h3>
      </Link>
      <Slider />
    </header>
	);
}
