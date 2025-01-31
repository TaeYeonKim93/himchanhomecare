import React from 'react';

export default function GoogleAnalytics() {
  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-R2L2HSNTS5"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R2L2HSNTS5');
          `,
        }}
      />
      <noscript>
        <iframe 
          src={`https://www.googletagmanager.com/ns.html?id=G-R2L2HSNTS5`}
          height="0" 
          width="0" 
          style={{display:'none', visibility:'hidden'}}
        />
      </noscript>
    </>
  );
} 