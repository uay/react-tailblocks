import React from 'react';

import DarkHeaderA from './lib/header/dark/a';
import DarkBlogA from './lib/blog/dark/a';
import DarkFooterA from './lib/footer/dark/a';

const App = () => (
  <main className="mode-dark">
    <div className="bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100">
      Hello World
    </div>
    <DarkHeaderA />
    <DarkBlogA />
    <DarkFooterA />
  </main>
);

export default App;
