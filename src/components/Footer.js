import React from 'react'
import {footer, footerText } from "../styles/footer.module.scss"

export default function Footer() {
  return (
    <footer className={footer}>

      <div className={footerText}>&copy; Les Borkowski 2021&emsp;
      <a href="mailto:leszek.borkowski@outlook.com">leszek.borkowski@outlook.com</a></div>
      
    </footer>
  )
}
