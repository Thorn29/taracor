import React from 'react';
import { graphql, useStaticQuery } from "gatsby";

import Image from "../components/image";
import SEO from "../components/seo";
import Layout from "../components/layout";

const PlasteringPainting = (props) => {

  const data = useStaticQuery(graphql`query {
    image1: file(relativePath: { eq: "pages/g0.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    image2: file(relativePath: { eq: "pages/g1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }`);

  return(
    <Layout pageName='Plastering & Painting' pageDesc="Don't hesitate to call us for your free estimate">
    <SEO title='Plastering & Painting' />
    <div className='halfwidth'>
    <p className='text'>We offer diverse plastering and painting services, ranging from simple jobs such as paint touch-ups or plastering of a wall, to more complex jobs like interior complete renovations of houses of character and farmhouses. <br/><br/> We are equipped to carry out any kind of plastering job. The most popular internal plastering method is <strong>gypsum plastering</strong>, mostly found in newly built houses and apartments. The two techniques used for gypsum plastering are the float and the ‘riegla’ technique. The latter is usually used when walls are extremely uneven or where perfection is an asset.</p>
    </div>
    <div className='halfwidth'>
    <Image fluidValue={data.image1.childImageSharp.fluid} custom='half' />
    </div>
    <div className='halfwidth'>
    <Image fluidValue={data.image2.childImageSharp.fluid} custom='half' />
    </div>
    <div className='halfwidth'>
    <p className='text'>Furthermore, painting is usually one of the last trades to be carried out at a job site, and is usually this that makes a room or a façade <strong>stand out.</strong> When painting we pay <strong>extra attention to detail</strong>, as a bad painting job can easily ruin all efforts done in previous trades. Straight lines between different coloured walls or ceilings, surface smoothness and removal of any minor imperfections are some of the things we consider when applying painting coats.</p>
    </div>
    </Layout>
  )
}

export default PlasteringPainting;
