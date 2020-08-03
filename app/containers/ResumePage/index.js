/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';

export default function ResumePage() {

  function isMobileSafari() {
    return navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/)
}
  function PDFViewer(){
    return(
                  <div className='pdf-wrapper'>
                  <object className='react-pdf-obj'
                          data="https://github.com/CompG33k/TheFullStackDeveloper/raw/gh-pages/NickJVelascoResume.pdf"
                          type="application/pdf">
                  </object>
                  </div>
    );
  }
   function MobilePDFViewer(){
     return(
      <div className='pdf-wrapper'>
      <iframe
        className="react-pdf-mobile"
        src="https://drive.google.com/viewerng/viewer?url=https://github.com/CompG33k/TheFullStackDeveloper/raw/gh-pages/NickJVelascoResume.pdf?pid=explorer&efh=false&a=v&chrome=false&embedded=true"
        title="NickVelascoResume">
      </iframe>
      </div>
     );
   }

  return (
    <div>
      <Helmet>
        <title>Resume Page</title>
        <meta
          name="description"
          content="Resume page of React.js Boilerplate application"
        />
      </Helmet>
    {
      isMobileSafari()
      ? MobilePDFViewer()
      :  PDFViewer()
    }
    </div>
  );
}
