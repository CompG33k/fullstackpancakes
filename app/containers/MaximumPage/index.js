/*
 * FeaturePage
 *
 * List all the features
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import ReactPlayer from "react-player";

export default function MaximumPage() {

  return (
    <div>
      <Helmet>
        <title>Maximum Page</title>
        <meta
          name="description"
          content="Resume page of React.js Boilerplate application"
        />
      </Helmet>
       <div className='player-wrapper'>
       <ReactPlayer
       className='react-player'
       playing
       width='100%'
       height='100%'
        url="https://www.youtube.com/watch?v=bwuWTyH3smw"
      />
      </div>
    </div>
  );
}

