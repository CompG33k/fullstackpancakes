/*
 * FeaturePage
 *
 * List all the features
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { MobilePDFReader } from 'react-read-pdf';

export default function ResumePage() {

  function isMobileSafari() {
    return navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/)
}
  function PDFViewer(){
    return(
                  <object width='100%' height='800px'
                  data="https://github.com/CompG33k/TheFullStackDeveloper/raw/gh-pages/NickJVelascoResume.pdf" type="application/pdf">
                  </object>
    );
  }
  function MobilePDFViewer(){
    return(
      <div style={{top:'50',overflow:'scroll',height:600}}>
               <MobilePDFReader auto='scale' url="https://github.com/CompG33k/TheFullStackDeveloper/raw/gh-pages/NickJVelascoResume.pdf"/>
                  {/* <MobilePDFReader auto='scale' url={process.env.PUBLIC_URL + '/NickJVelascoResume.pdf'}/> */}
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
   isMobileSafari()?
   MobilePDFViewer()
   :PDFViewer()
 }

{/*
{ (window.navigator.standalone == true)?
    // <div  div style={{overflow:'scroll',height:600}}>
      <MobilePDFReader auto='scale' url="https://github.com/CompG33k/TheFullStackDeveloper/raw/gh-pages/NickJVelascoResume.pdf"/>
    // </div>
: */}


{/* <object width='100%' height='800px'
                data="https://github.com/CompG33k/TheFullStackDeveloper/raw/gh-pages/NickJVelascoResume.pdf" type="application/pdf">   </object> */}

    </div>
  );
}
