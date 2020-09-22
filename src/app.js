import React from 'react';

import HeaderA from './lib/header/a';

const onToggleClick = () => {
  const attr = 'data-mode';
  const rootNode = document.documentElement;

  const isDark = rootNode.getAttribute(attr) === 'dark';
  rootNode.setAttribute(attr, isDark ? 'light' : 'dark');
};


const App = () => (
  <main>
    <button
      className="bg-blue-100 dark:bg-blue-900 hover:bg-blue-300 dark-hover:bg-blue-600 text-blue-900 dark:text-blue-100 font-bold py-2 px-4 rounded uppercase m-auto block space-y-16"
      style={{ margin: '100px auto' }}
      onClick={onToggleClick}>
      Toggle Dark Mode
    </button>

    <HeaderA />
  </main>
);

export default App;
