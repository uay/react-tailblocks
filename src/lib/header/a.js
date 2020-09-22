import React from 'react';
import PropTypes from 'prop-types';

const HeaderA = props => (
  <header className="text-gray-700 body-font dark:text-gray-500 dark:bg-gray-900">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a href className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 dark:text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className={`w-10 h-10 text-white p-2 bg-${props.theme}-500 rounded-full`}
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <span className="ml-3 text-xl">tailblocks</span>
      </a>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <a href className="mr-5 hover:text-gray-900 dark-hover:text-white">First Link</a>
        <a href className="mr-5 hover:text-gray-900 dark-hover:text-white">Second Link</a>
        <a href className="mr-5 hover:text-gray-900 dark-hover:text-white">Third Link</a>
        <a href className="mr-5 hover:text-gray-900 dark-hover:text-white">Fourth Link</a>
      </nav>
      <button
        className="inline-flex items-center bg-gray-200 dark:bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
        Button
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </header>
);

HeaderA.defaultProps = {
  theme: 'indigo',
};

HeaderA.propTypes = {
  theme: PropTypes.string,
};

export default HeaderA;
