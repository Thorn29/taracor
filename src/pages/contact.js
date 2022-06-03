import React from 'react';
import SEO from "../components/seo";
import Layout from "../components/layout";
import Map from '../components/map';

const Contact = (props) => {

  return(
    <Layout pageName='Contact' pageDesc="Get in touch, we're here to help">
    <SEO title='Contact' />
    <div className='halfwidth'>
    <h1 className='contact-title'>Taracor</h1>
    <p className='text'>Phone number:<br/><a href='tel:+35679008790'>+35679008790</a><br/><a href='tel:+35679373861'>+35679373861</a><br/><br/>E-Mail:<br/><a href="mailto:office@taracor.net?subject=Message From TARACOR Website">office@taracor.net</a><br/><br/>Plot 14, Triq L-Inginerija, Central Business District, Mriehel, Birkirkara BKR 3000</p>
    </div>
    <div className='halfwidth'>
    <Map />
    </div>
    </Layout>
  )
}

export default Contact;
