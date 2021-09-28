import React from 'react'
import Layout from '../components/Layout'
import {contentBox, textMain, textDesc} from '../styles/404.module.scss'
 
export default function PageNotFound() {
  return (
    
      <Layout>

        <div className={contentBox}>
          <div className={textMain}>404</div>
          <div className={textDesc}>Page not Found</div>
        </div>

      </Layout>
    
  )
}
