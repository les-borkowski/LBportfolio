
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import { contentBox } from '../styles/portfolio.module.scss'

export default function Portfolio({ data }) {

  return (
      <Layout>
      <div className={contentBox}>
        {
          data.allMdx.nodes.map(node => {
            
            
            return (
            
              <ProjectCard 
                key={node.id} 
                title={node.frontmatter.title} 
                shortdescr={node.frontmatter.shortdescr} 
                demo={node.frontmatter.demo} 
                sourcecode={node.frontmatter.sourcecode}
                details={`${node.slug}`}
              />
            
          )})
        }

      </div>
    </Layout>
  )
}

export const query = (graphql`
query GetProjects {
  allMdx(sort: {order: ASC, fields: frontmatter___title}) {
    nodes {
      slug
      id
      frontmatter {
        demo
        shortdescr
        sourcecode
        title 
      }
    }
  }
}
`)


