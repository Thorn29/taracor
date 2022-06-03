import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import FooterNav from './footernav';
import classes from './footer.module.css';

const Footer = () => {

  const data = useStaticQuery(graphql`query {
    site {
   siteMetadata {
     title
   }
 }
  }`);

  return (
    <footer className={classes.Footer}>
      <h1>{data.site.siteMetadata.title}</h1>
      <FooterNav />
      <a href='https://www.google.com/' className={classes.Signature}>Thorn29 2020</a>
    </footer>
  );
}

export default Footer;
