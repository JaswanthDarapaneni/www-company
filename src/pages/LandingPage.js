/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import {
  Services, Portfolios, Advantages, Testimonials,
} from 'json/landingPageData';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Helmet } from 'react-helmet';
import Header from 'parts/Header';
import Hero from 'parts/Hero';
import Service from 'parts/Service';
import Portfolio from 'parts/Portfolio';
import Advantage from 'parts/Advantage';
import Testimonial from 'parts/Testimonial';
import Discuss from 'parts/Discuss';
import Footer from 'parts/Footer';

export default class LandingPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Helmet>
          <meta name="description" content="Top website development companies in India" />
          <meta
            name="keywords"
            content=" E-commerce Platform, Affordable Website Builders, Website Design Services, Digital Dream ,Website Creators,Creativity Professional Website Design, Website Building Platforms, Web Development Services, Digital Success, Best Website Builders, Build Something Amazing, Unique Needs, My Site, mission"
          />
        </Helmet>
        <Header />
        <Hero />
        <Service data={Services} />
        <Portfolio data={Portfolios} />
        <Advantage data={Advantages} />
        <Testimonial data={Testimonials} />
        <Discuss />
        <Footer />
      </>
    );
  }
}
