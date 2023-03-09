import React from 'react';
import Seo from '@src/components/common/Seo';

export default function Home() {
  return (
    <>
      <Seo title="Home">
        <meta name="home" content="movies & tv shows" />
      </Seo>
      <div style={{ height: '1000px' }}>Temporary home page</div>
    </>
  );
}
