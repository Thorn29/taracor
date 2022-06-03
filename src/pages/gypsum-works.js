import React from 'react';
import { graphql, useStaticQuery } from "gatsby";

import Image from "../components/image";
import SEO from "../components/seo";
import Layout from "../components/layout";

const GypsumWorks = (props) => {

  const data = useStaticQuery(graphql`query {
    image: file(relativePath: { eq: "pages/e0.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }`);

  return(
    <Layout pageName='Gypsum Works' pageDesc="Don't hesitate to call us for your free estimate">
    <SEO title='Gypsum Works' />
    <div className='fullwidth'>
    <p className='text'>Our main services include flat ceilings, bulk heads, partitions, anything your mind can imagine. Gypsum is a flexible material which can create <strong>anything.</strong> Our team is specialized in this field. Our gypsum installers have a vast experience in this sector.<br/><br/>We install any design needed, including <strong>dry lining, gypsum soffits and coving, bulkheads, shadow gaps, floating ceiling, Rockwool insulation, cement boards, wedi boards</strong> etc.</p>
    <Image fluidValue={data.image.childImageSharp.fluid} custom='full' />
    </div>
    </Layout>
  )
}

export default GypsumWorks;
