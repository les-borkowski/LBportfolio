import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { contentBox, containerStory, textTitle, textParagraph, containerIcons, photo, icons } from "../styles/about.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../utils/font-awesome';


export default function About() {

  

  return (
    
    <div className={contentBox}>

      <div className={containerStory}>

        <div className={photo}>
          <StaticImage 
            src="../images/me-dt-ca-v4.jpg" 
            alt="Me" 
            placeholder="blurred"
            layout="constrained"
            width={300}
            height={300}/>
        </div> 
        
        
        <h3 className={textTitle}>My Story</h3>

        <p className={textParagraph} >After 9 years of working within the hospitality industry, I have decided to take on a new path and focus on pursuing a career within Software Engineering. I have been completing various coding courses in my spare time for several years as this is where my passion lies and I would like to now do this full time. I am interested in web development with JavaScript and React. I am hard working, motivated and keen to learn. I am looking for an internship or a junior role to start my career and utilise my skills in a challenging environment which will test my technical skills and further develop my personal attributes. </p>     

        

      </div>

      <div className={containerIcons}>
        <p className={textParagraph}> Interests:</p>

        <div className={icons}>
        
        <FontAwesomeIcon icon={['fab', 'html5']} />
        <FontAwesomeIcon icon={['fab', 'css3']} />
        <FontAwesomeIcon icon={['fab', 'js']} />
        <FontAwesomeIcon icon={['fab', 'react']} />
        <FontAwesomeIcon icon={['fab', 'python']} />
        <FontAwesomeIcon icon={['fab', 'sass']} />
        
        
        
        
        </div>
      </div>


    </div>


    
  )
}

