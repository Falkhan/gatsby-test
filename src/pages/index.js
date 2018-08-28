import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Hello there</h1>
    <p>My name is Piotr and I like programming.</p>
    <p>I am currently studying Management and Politics. I was always interested in coding and decided to pursue a career in IT after graduation.</p>
    <p>I learnt a lot using free sites such as freeCodeCamp (so thank you for that!)</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
