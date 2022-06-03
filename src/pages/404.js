import React from "react";
import { Link } from 'gatsby';

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout pageName='Page Not Found' pageDesc="Error 404">
    <SEO title="404: Not found" />
    <div className='fullwidth'>
    <p className='text'>Whoops! It looks like you just hit a route that doesn't exist.<br/><br/>But since you're already here, visit our <Link to='/'>homepage</Link>, or check out other pages in the navigation menu.</p>
    </div>
  </Layout>
)

export default NotFoundPage
