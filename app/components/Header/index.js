import React from 'react';
import { FormattedMessage } from 'react-intl';
import { BrowserRouter as Router, HashRouter, Switch, Route, Link } from 'react-router-dom';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';

function Header() {
  return (
    <div>
       <A >
        <Img src={Banner} alt="react-boilerplate - Logo" />
      </A>
       <NavBar>
        {/* <ul >
            <li><Link to="/" >home </Link></li>
            <li><Link to="/AboutMe" >aboutme</Link></li>
            <li><Link to="/Resume" >resume</Link></li>
        </ul> */}



        <HeaderLink  to="/NickVelasco/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink to="/aboutme">
          <FormattedMessage {...messages.aboutme} />
        </HeaderLink>
        <HeaderLink to="/resume">
          <FormattedMessage {...messages.resume} />
        </HeaderLink>
        <HeaderLink to="/maximum">
          <FormattedMessage {...messages.maximize} />
        </HeaderLink>
      </NavBar>
    </div>
  );
}

export default Header;
