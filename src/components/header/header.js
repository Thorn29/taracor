import React from "react";
import classes from './header.module.css';
import Navbar from './navbar';
import Banner from './banner';

const Header = ({ sidebar, clicked, pageName, pageDesc}) => {

  return (
    <header className={classes.Header}>
      <div className={classes.Logo}></div>
      <Banner title={pageName} desc={pageDesc} />
      <Navbar />
    </header>
  );
}

export default Header
