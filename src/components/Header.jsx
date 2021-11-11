import React from 'react'
import Slider from './Slider'
import Hamburger from './Hamburger'
import Link from 'next/link'
import headerStyles from '../../styles/Header.module.css'

export default function Header({ openDrawer }) {
	return (
    <header className={headerStyles.header}>
      <Hamburger openDrawer={openDrawer}/>
      <Slider />
    </header>
	);
}
