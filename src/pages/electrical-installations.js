import React from 'react';
import { graphql, useStaticQuery } from "gatsby";

import Image from "../components/image";
import SEO from "../components/seo";
import Layout from "../components/layout";

const ElectricalInstallations = (props) => {

  const data = useStaticQuery(graphql`query {
    image1: file(relativePath: { eq: "pages/b0.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    image2: file(relativePath: { eq: "pages/b1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }`);

  return (
  <Layout pageName='Electrical Installations' pageDesc="Don't hesitate to call us for your free estimate">
  <SEO title='Electrical Installations' />
  <div className='halfwidth'>
  <p className='text'>In our industrial, commercial and domestic installations, we supply and install all <strong>switchgear, cables, conduit, trunking</strong> and <strong>wiring accessories</strong>, along with all materials and labor necessary for a complete turnkey service. Electrical installations include works on:<br/><br/></p>
    <ul className='text-list'>
      <li>Cable trays</li>
      <li>Armored cables</li>
      <li>Trunking</li>
      <li>Low-voltage installations</li>
      <li>Data installations</li>
      <li>Wiring up control panels</li>
      <li>Distribution boards</li>
      <li>Intelligent lighting</li>
    </ul>
  </div>
  <div className='halfwidth'>
  <Image fluidValue={data.image1.childImageSharp.fluid} custom='half' />
  </div>
  <div className='fullwidth'>
    <p className='text'>
      As professional contractors we are <strong>fully licensed and qualified</strong> to carry out electrical installations in accordance to the <em>Electricity Supply Regulations</em> to ensure a safe handover and reliable end product to the customer. With our broad experience within this sector we have the knowledge to carry out electrical installations with today's modern applications involving <strong>Automation Systems, Intelligent lights.</strong> We emphasize on reliability and safety and this is why we utilize warranted Electrical Engineers to carry out technical analysis on our projects and certify our installations.
    </p>
  <Image fluidValue={data.image2.childImageSharp.fluid} custom='full' />
  </div>
  </Layout>
  );
}

export default ElectricalInstallations;
