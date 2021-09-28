import { Link } from 'gatsby'
import React from 'react'
import { cardContainer, cardMedia, cardContent, cardDescription, shortDescr, cardLinks, btn, title } from "../styles/projectCard.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../utils/font-awesome';


export default function ProjectCard(props) {

    
  return (
    <div className={cardContainer}>

      <div className={cardContent}>

        <div className={cardMedia}>
          <FontAwesomeIcon icon={['far', 'file-code']} />
        </div>

        <div className={cardDescription}>

          <div className={title}><h6>{props.title}</h6> </div>
          <div className={shortDescr}>
            <p>{props.shortdescr}  </p>
          </div>
        </div>
      </div>

      
      <div className={cardLinks}>

        <a className={btn} href={`${props.sourcecode}`} target="_blank" rel="noreferrer">
          <div>
            Source code
          </div>
        </a>

        {  
        props.demo && props.demo != null ? ( 
          <a className={btn} href={`${props.demo}`} target="_blank" rel="noreferrer">
            <div>
              Demo
            </div>
          </a>) : <></>   
        }

        <Link className={btn} to={`/projects/${props.details}`}>
          <div >
            Details
          </div>
        </Link>

        </div>

    </div>
  )
}
