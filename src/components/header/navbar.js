import React from 'react';
import { Link, graphql, useStaticQuery } from "gatsby";
import classes from './navbar.module.css';

const Navbar = () => {
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

  return (
    <nav className={classes.Navbar}>
      <ul>
        {data.site.siteMetadata.menuLinks.map(link => {
          return <li key={link.url}><Link to={link.url} activeClassName={classes.active}>{link.name}</Link></li>;
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
