import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import classes from './footernav.module.css';

const FooterNav = () => {

  const data = useStaticQuery(graphql`query {
    site {
   siteMetadata {
     menuLinks {
       name
       url
     }
   }
 }
  }`);

  return(
    <ul className={classes.FooterNav}>
      {data.site.siteMetadata.menuLinks.map(link => {
        return <li key={link.url}><Link to={link.url} activeClassName={classes.active}>{link.name}</Link></li>;
      })}
    </ul>
  );
}

export default FooterNav;
