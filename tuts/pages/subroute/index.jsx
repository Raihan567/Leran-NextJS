import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
const Ninja = () => {
  return (
    <div className='padding'>
      <Head>
      <title>Listing page</title>
    </Head>
      <h1>All Ninja</h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h4>
        <Link href="/">
          <a>Go to HomePage</a>
        </Link>
      </h4>

    </div>
  );
};

export default Ninja;