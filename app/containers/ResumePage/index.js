/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import CenteredSection from '../HomePage/CenteredSection';

import H1 from 'components/H1';
import H2 from 'components/H2';
import messages from './messages';


export default function ResumePage() {
  return (
    <div>
      <Helmet>
        <title>Resume Page</title>
        <meta
          name="description"
          content="Resume page of React.js Boilerplate application"
        />
      </Helmet>
      {/* <H2>
        <CenteredSection>
          { <FormattedMessage {...messages.header} /> }
        </CenteredSection>
      </H2> */}
      <div className={'resume-container'}>
                <object width="100%" height="800px"
                data="https://github.com/CompG33k/TheFullStackDeveloper/raw/gh-pages/NickJVelascoResume.pdf" type="application/pdf">   </object>
            </div>

    </div>
  );
}
