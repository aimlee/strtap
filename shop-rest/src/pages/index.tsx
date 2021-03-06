import React, { useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
// the redirect will only happen on the client-side. This is by design,
const PAGE_TYPE = 'grocery';

const IndexPage: React.FC<{}> = () => {
  useEffect(() => {
    Router.replace('/[type]', '/grocery-two');
  });
  return (
    <Head>
      <meta name="robots" content="noindex, nofollow" />
    </Head>
  );
};

export default IndexPage;
