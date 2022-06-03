import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import "./index.css"

const IndexPage = () => {

const data = useStaticQuery(graphql`query {
  image1: file(relativePath: { eq: "pages/a0.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  image2: file(relativePath: { eq: "pages/a1.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3: file(relativePath: { eq: "pages/a2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
}`);

  return (
    <Layout pageName='About Us' pageDesc='Find out who we are and what we offer'>
      <SEO title="About Us" />
      <div className='fullwidth'>
        <h4 className='grey-header'>Who are we?</h4>
        <p className='text'><strong>TARACOR</strong> is a Malta-based, construction services company which covers various segments of the building process. The company has earned recognition for undertaking complex and demanding projects, implementing innovative solutions, embracing emerging technologies, and making a difference for their clients.</p>
        <Image fluidValue={data.image1.childImageSharp.fluid} custom='full' />
      <p className='text'>Whether you are an investor, home owner or general contractor, the problem is always the same: how to find a reliable, reputable subcontractors who will <strong>deliver what they promise, as agreed and right on time.</strong> Even if you find one or two, the others will likely fail to meet the high standards of the industry. That is why you call <strong>TARACOR</strong>. We provide a multitude of turnkey services, all under one roof and all of unrivalled quality.</p>
      </div>
      <div className='halfwidth'>
      <Image fluidValue={data.image2.childImageSharp.fluid} custom='half trans' />
      </div>
      <div className='halfwidth'>
        <p className='text'>
          Our services include: <br/><br/></p>
        <ul className='text-list'>
          <li>Electrical works</li>
          <li>Mechanical works</li>
          <li>Plumbing</li>
          <li>Drains</li>
          <li>Under-Floor Heating</li>
          <li>Intelligent lighting</li>
          <li>Gypsum Soffits & Coving</li>
          <li>Plastering And Painting</li>
          <li>Tiling</li>
          <li>Data Installations</li>
          <li>Solar Water Heaters</li>
          <li>Project Management</li>
        </ul>
      </div>
      <div className='halfwidth'>
        <h4 className='grey-header'>Why us?</h4>
        <p className='text'>Our people bring their technical knowledge, experience, and resourcefulness to make sure that our clients get the <strong>top notch service.</strong> We cover major market segments and provide services to private homes, commercial real estate, health facilities, industrial and sport objects and other types of buildings.<br/><br/>Our vision is to be the highest value provider of construction services and technical expertise in Malta and abroad.</p>
      </div>
    <div className='halfwidth'>
      <Image fluidValue={data.image3.childImageSharp.fluid} custom='half' />
    </div>
    </Layout>
  )
}

export default IndexPage
