import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Layout from '../src/components/Layout'
import '../styles/globals.css'
import reportWebVitals from '../src/reportWebVitals'

const MyApp = function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const body = document.querySelector('body')
    const theme = window.localStorage.getItem('theme')
    if (theme === null) {
      window.localStorage.setItem('theme', '')
    }

    body.className = theme
  }, [])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

MyApp.propTypes = {
  Component: PropTypes.element.isRequired,
  pageProps: PropTypes.object.isRequired,
}
reportWebVitals()

export default MyApp
