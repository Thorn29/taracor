import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import classes from './banner.module.css';

const Banner = ({ title, desc}) => {

  const data = useStaticQuery(graphql`query {
        imagelist: allFile(filter: {relativeDirectory: {eq: "banner"}}, sort: {fields: name}) {
            nodes {
              name
              childImageSharp {
                fluid(maxWidth: 3000, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
  }`);

  const [state, setState] = useState({
    transX: 0,
    transY: 0
  });

  let imgValue;

  switch (title) {
    case 'About Us':
      imgValue = data.imagelist.nodes[0].childImageSharp.fluid;
      break;
    case 'Electrical Installations':
      imgValue = data.imagelist.nodes[1].childImageSharp.fluid;
      break;
    case 'Mechanical Installations':
      imgValue = data.imagelist.nodes[2].childImageSharp.fluid;
      break;
    case 'Plumbing':
      imgValue = data.imagelist.nodes[3].childImageSharp.fluid;
      break;
    case 'Gypsum Works':
      imgValue = data.imagelist.nodes[4].childImageSharp.fluid;
      break;
    case 'Tiling':
      imgValue = data.imagelist.nodes[5].childImageSharp.fluid;
      break;
    case 'Plastering & Painting':
      imgValue = data.imagelist.nodes[6].childImageSharp.fluid;
      break;
    case 'Contact':
      imgValue = data.imagelist.nodes[7].childImageSharp.fluid;
      break;
    default:
    imgValue = data.imagelist.nodes[0].childImageSharp.fluid;;
  }

const backgroundHandler = (event) => {
  setState({transX: event.pageX / 30, transY: event.pageY / 30});
}

return (
  <div className={classes.Outer} onMouseMove={backgroundHandler} aria-hidden="true">
    <div className={classes.Inner} style={{transform: `translate(${state.transX}px, ${state.transY}px)`}}>
    <Img fluid={imgValue} objectFit="cover"
        objectPosition="50% 50%" />
    </div>
    <div className={classes.Content}>
      <div className={classes.bg}>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  </div>
);
}

export default Banner;
