import React from 'react'
import errorStyles from '../styles/404.module.css'

export default function notFound() {
  return (
    <div className={errorStyles.wrapper}>
      <h2 className={errorStyles['status-code']}>404</h2>
      <p className={errorStyles.message}>
        we were unable to find the page you were looking for
      </p>
    </div>
  )
}
