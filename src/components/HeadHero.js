import React from 'react'
import { contentBox, heroTextBox, heroTextMain, heroTextDesc, btnMore, heroBox, xxlText } from "../styles/hero.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../utils/font-awesome';
import { Link } from "gatsby";



export default function HeadHero() {
  return (
    <div className={contentBox}>

            <div className={heroTextBox}>

              <div className={heroBox}>

                <div>              
                  <div className={heroTextMain} >Less is more...</div>
                  <div className={heroTextDesc} >My name is Les Borkowski. Web-developer based in London. This is my personal page and a portfolio. </div>
                </div>
                <div>
                  <div className={xxlText}>&lt;&#47;&gt;</div>
                </div>


              </div>

              <Link  className={btnMore} to="/Portfolio">
                PORTFOLIO <FontAwesomeIcon icon={"caret-square-right"} />
              </Link>
            </div>

          </div>
  )
}
