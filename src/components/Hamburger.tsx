import React from 'react'
import hamburgerStyles from '../../styles/Hamburger.module.css'

export default function Hamburger({ toggleDrawer, checked, setChecked }) {
  return (
    <>
      <div className={hamburgerStyles.wrapper}>
        <input
          className={hamburgerStyles.toggle}
          type="checkbox"
          aria-label="Button to open site navigation"
          checked={checked}
          onChange={() => {
            toggleDrawer()
            setChecked(!checked)
          }}
        />
        <div className={hamburgerStyles.hamburger}>
          <div />
        </div>
      </div>
    </>
  )
}
