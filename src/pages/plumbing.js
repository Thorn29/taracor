import React from 'react';
import { graphql, useStaticQuery } from "gatsby";

import Image from "../components/image";
import SEO from "../components/seo";
import Layout from "../components/layout";

const Plumbing = (props) => {

  const data = useStaticQuery(graphql`query {
    image1: file(relativePath: { eq: "pages/d0.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    image2: file(relativePath: { eq: "pages/d1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }`);

  return(
    <Layout pageName='Plumbing' pageDesc="Don't hesitate to call us for your free estimate">
    <SEO title='Plumbing' />
    <div className='halfwidth'>
    <p className='text'>Our residential plumbing services include:<br/><br/></p>
      <ul className='text-list'>
        <li>Water Heaters (tankless and conventional)</li>
        <li>Pipe Replacement</li>
        <li>Drain Cleaning</li>
        <li>Sump Pumps</li>
        <li>Gas Lines</li>
        <li>Water Lines</li>
        <li>Sewer Lines</li>
        <li>New Plumbing Fixtures</li>
      </ul>
    </div>
    <div className='halfwidth'>
      <Image fluidValue={data.image1.childImageSharp.fluid} custom='half' />
    </div>
    <div className='halfwidth'>
      <Image fluidValue={data.image2.childImageSharp.fluid} custom='half' />
    </div>
    <div className='halfwidth'>
      <p className='text'>Our goal is to keep your residential plumbing system functioning properly on a regular basis so your home runs smoothly and your plumbing functions properly.<br/><br/>As established turnkey contractors we also provide <strong>mechanical installations</strong> consisting of plumbing and drain systems. We have a vast portfolio, experience and practical knowledge in Polybutylene (Pb) systems and also equipped for Poly Propylene Random (PPR) plumbing systems. We accommodate the installation in accordance to the <strong>clients demands</strong> and propose solutions based on our expertise within this sector.</p>
    </div>
    </Layout>
  )
}

export default Plumbing;
