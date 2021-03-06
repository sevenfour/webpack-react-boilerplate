import React, { Suspense } from 'react';

import Loading from 'components/Loading';

/* Import global styles */
import 'styles/index.css';

const App = () => {
  return (
    <Suspense fallback={<Loading overlay />}>
      <h1>Webpack react boilerplate</h1>
      <Loading />
    </Suspense>
  );
};

export default App;
