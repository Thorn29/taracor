import React from 'react';
import Img from 'gatsby-image';
import classes from './image.module.css';

const Image = ({ custom, fluidValue}) => {

  let frameClass = classes.Frame;

  switch (custom) {
    case 'full':
      frameClass = [classes.Frame, classes.full].join(' ');
      break;
    case 'full trans':
      frameClass = [classes.Frame, classes.full, classes.trans].join(' ');
      break;
      case 'half':
        frameClass = [classes.Frame, classes.half].join(' ');
        break;
      case 'half trans':
        frameClass = [classes.Frame, classes.half, classes.trans].join(' ');
        break;
    default:
    frameClass = classes.Frame;
  }

  return (
    <div className={frameClass}>
      <Img fluid={fluidValue} />
    </div>
  )
}

export default Image;
