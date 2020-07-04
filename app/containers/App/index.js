/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route ,
  BrowserRouter as Router,
  HashRouter,
  Link} from 'react-router-dom';
import { Redirect } from 'react-router';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import AboutMePage from 'containers/AboutMePage/Loadable';
import ResumePage from 'containers/ResumePage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (

    <AppWrapper>
      <Helmet
        titleTemplate="%s - The Full Stack Engineer"
        defaultTitle="Nick Velasco"
      >
        <meta name="description" content="A React.js Nick's application" />
      </Helmet>
      <Header />

        <Switch>
          {/* <Route exact path="/" component={() =><Redirect  to='/' component={HomePage}/>}/> */}
          {/* <Route tabIndex = "0" path={process.env.PUBLIC_URL +'/'} component={HomePage} /> */}
          <Route path="/" component={HomePage} />
          <Route path="/aboutme" component={AboutMePage} />
          <Route path="/resume" component={ResumePage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
       
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
