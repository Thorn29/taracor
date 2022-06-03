import React from 'react';
import classes from './menubutton.module.css'

const MenuButton = ({ status, click }) => {
  return(
    <div className={status ? [classes.MenuButton, classes.active].join(' ') : classes.MenuButton} onClick={click} onKeyDown={click} role="button" tabIndex={0}>
      <span />
      <span />
      <span />
      <span />
    </div>
  );
}

export default MenuButton;
