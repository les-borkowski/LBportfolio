import React from "react"

import Layout from "../components/Layout"
import HeadHero from "../components/HeadHero"
import About from "../components/About"


import '../utils/font-awesome';


export default function Home() {
  return (
      <Layout pageTitle={"Home"}>

        <HeadHero />
        <About />
        
      </Layout>
    
  )
}


