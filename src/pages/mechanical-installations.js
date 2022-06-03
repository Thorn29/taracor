import React from 'react';
import { graphql, useStaticQuery } from "gatsby";

import Image from "../components/image";
import SEO from "../components/seo";
import Layout from "../components/layout";

const MechanicalInstallations = (props) => {

  const data = useStaticQuery(graphql`query {
    image: file(relativePath: { eq: "pages/c0.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }`);

  return(
    <Layout pageName='Mechanical Installations' pageDesc="Don't hesitate to call us for your free estimate">
    <SEO title='Mechanical Installations' />
    <div className='halfwidth'>
    <p className='text'>Preventative Maintenance, Installations,
    maintenance and trouble shooting can be carried out on the equipment listed below:<br/><br/></p>
    <ul className='text-list'>
      <li>Air Compressors</li>
      <li>Air Conditioning Units</li>
      <li>Boilers</li>
      <li>Chillers</li>
      <li>Pumps</li>
      <li>Reverse Osmosis Plants</li>
      <li>Electrical Control Panels</li>
      <li>Bore Hole Pumps</li>
      <li>Heat Exchangers</li>
      <li>Main Electrical Switchboards</li>
      <li>Spa Related Equipment</li>
    </ul>
    </div>
    <div className='halfwidth'>
      <Image fluidValue={data.image.childImageSharp.fluid} custom='half' />
    </div>
    </Layout>
  )
}

export default MechanicalInstallations;
