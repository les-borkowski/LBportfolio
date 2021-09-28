import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from './Footer'
import {container, mainContainer} from '../styles/layout.module.scss'

export default function Layout({ pageTitle, children }) {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          copyright
          description
          title
        }
      }
    }`)

  return (
    <div className={container}>
      <title>{ pageTitle } | { data.site.siteMetadata.title }</title>

      <Navbar />

        <main>

          <div className={mainContainer}>
            { children }
          </div>
          
        </main>

      <Footer />
      
    </div>
  )
}
