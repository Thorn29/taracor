import React from 'react';
import { Link, graphql, useStaticQuery } from "gatsby";
import classes from './sidemenu.module.css';

const SideMenu = () => {

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
    <div className={classes.Sidebar}>
      <ul>
        {data.site.siteMetadata.menuLinks.map(link => {
          return <li key={link.url}><Link to={link.url} activeClassName={classes.active}>{link.name}</Link></li>;
        })}
      </ul>
    </div>
  )
}

export default SideMenu;
