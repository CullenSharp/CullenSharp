import React from 'react'
import Slider from './Slider'
import Hamburger from './Hamburger'
import navStyles from '../../styles/Nav.module.css'

export default function Header({ toggleDrawer, checked, setChecked }) {
  return (
    <nav className={navStyles.nav}>
      <Slider />
      <div className={navStyles.divider} />
      <Hamburger
        toggleDrawer={toggleDrawer}
        checked={checked}
        setChecked={setChecked}
      />
    </nav>
  )
}
