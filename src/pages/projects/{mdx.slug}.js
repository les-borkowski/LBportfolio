import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import Layout from '../../components/Layout'
import { contentBox, containerProject, thumb, textTitle, textStack, links, btn, mdxStyles } from '../../styles/projectPage.module.scss'


export default function ProjectPage({ data }) {

  const image = getImage(data.mdx.frontmatter.thumb)

  return (
        
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div className={contentBox}>

      <div className={containerProject}>
      
      <section>

        <GatsbyImage
          className={thumb} 
          image={image}
          alt={data.mdx.frontmatter.thumb_alt}
          width={300}
        />
        
      <h2 className={textTitle}>{data.mdx.frontmatter.title}</h2>
      <h4 className={textStack}>{data.mdx.frontmatter.stack}</h4>

      <div className={mdxStyles}>
        <MDXRenderer>
          {data.mdx.body}
        </MDXRenderer>
      </div>

      <div className={links}>

        <a className={btn} href={`${data.mdx.frontmatter.sourcecode}`} target="_blank" rel="noreferrer">
          <div>
            Source code
          </div>
        </a>

        {  
          data.mdx.frontmatter.demo && data.mdx.frontmatter.demo != null ? ( 
          <a className={btn} href={`${data.mdx.frontmatter.demo}`} target="_blank" rel="noreferrer">
            <div>
              Demo
            </div>
          </a>) : <></>   
        }

      </div>

      </section>

      </div>
    </div>
    </Layout>
    
  )
}

export const query = graphql`
query($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      demo
      stack
      shortdescr
      sourcecode
      title
      thumb_alt
      thumb {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    body
  }
}
`