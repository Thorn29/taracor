import React, { useState } from 'react';

import Header from './header/header';
import Footer from './footer/footer';
import MenuButton from './header/menubutton';
import Sidebar from './header/sidemenu';
import classes from './layout.module.css';

const Layout = ({ pageName, pageDesc, children }) => {

  const [sidebarStatus, setSidebar] = useState(false);

  const sidebarToggle = () => {
    setSidebar(!sidebarStatus);
  }

  return (
    <div className={sidebarStatus ? [classes.Layout, classes.active].join(' ') : classes.Layout}>
      <div className={classes.Front}>
        <Sidebar />
        <Header clicked={sidebarToggle} sidebar={sidebarStatus} pageName={pageName} pageDesc={pageDesc} />
        <MenuButton status={sidebarStatus} click={sidebarToggle} />
        <div className={classes.Container}>
          <h4 className={classes.PageName}>{pageName}</h4>
          {children}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
