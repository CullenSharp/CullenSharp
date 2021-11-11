import React from 'react'
import hamburgerStyles from '../../styles/Hamburger.module.css'

export default function Hamburger({ openDrawer }) {
  return (
    <>
      <div className={hamburgerStyles.wrapper}>
        <input 
          className={hamburgerStyles.toggle}
          type='checkbox'
          onFocus={openDrawer}
          onBlur={openDrawer}
        />
        <div className={hamburgerStyles.hamburger}>
          <div />
        </div>
        <input className='sr-only' type='check' aria-label='Button to open site navigation'/>
      </div>
    </>
  )
}
