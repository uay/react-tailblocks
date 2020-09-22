import React from 'react';

import HeaderA from './lib/header/a';

const onToggleClick = () => {
  const attr = 'data-mode';
  const rootNode = document.documentElement;

  const isDark = rootNode.getAttribute(attr) === 'dark';
  rootNode.setAttribute(attr, isDark ? 'light' : 'dark');
};


const App = () => (
  <main className="dark:bg-blue-900">
    <div className="bg-gray-200 dark:bg-gray-700">
      <br />
      <button
        className="bg-blue-900 dark:bg-blue-100 hover:bg-blue-600 dark-hover:bg-blue-300 text-blue-100 dark:text-blue-900 font-bold py-2 px-4 rounded uppercase m-auto block"
        onClick={onToggleClick}>
        Toggle Dark Mode
      </button>
      <br />
      <br />
      <br />
    </div>

    {/* COMPONENTS */}

    <HeaderA />


    {/* END */}

    <br />
    <br />
    <br />
    <br />
    <br />

  </main>
);

export default App;
