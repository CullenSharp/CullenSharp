import React from 'react'
import hamburgerStyles from '../../styles/Hamburger.module.css'

export default function Hamburger({ toggleDrawer, checked, setChecked }) {

  return (
    <>
      <div className={hamburgerStyles.wrapper}>
        <input 
          className={hamburgerStyles.toggle}
          type='checkbox'
          checked={checked}
          onChange={() => {
            toggleDrawer()
            setChecked(!checked)
          }}
        />
        <div className={hamburgerStyles.hamburger}>
          <div />
        </div>
        <input className='sr-only' type='check' aria-label='Button to open site navigation'/>
      </div>
    </>
  )
}
