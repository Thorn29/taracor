import React from 'react';
import { graphql, useStaticQuery } from "gatsby";

import Image from "../components/image";
import SEO from "../components/seo";
import Layout from "../components/layout";

const Tiling = (props) => {
  const data = useStaticQuery(graphql`query {
    image: file(relativePath: { eq: "pages/f0.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }`);

  return(
    <Layout pageName='Tiling' pageDesc="Don't hesitate to call us for your free estimate">
    <SEO title='Tiling' />
    <div className='halfwidth'>
    <p className='text'>No matter the size, or the materials you wish to use, you can always expect quality installation from us, with great attention to detail. We also do <strong>feature walls</strong> and bathrooms. Customer satisfaction is our priority!<br/><br/></p>
    <ul className='text-list'>
      <li>Supply and installation of tile underlay</li>
      <li>Installation of cement render screed over existing concrete or timber floor</li>
      <li>Supply and installation of self levelling compound.</li>
      <li>Tile installation</li>
      <li>Bathroom renovations</li>
      <li>Grouting and re-grouting</li>
      <li>Caulking</li>
    </ul>
    </div>
    <div className='halfwidth'>
    <Image fluidValue={data.image.childImageSharp.fluid} custom='half' />
    </div>
    </Layout>
  )
}

export default Tiling;
