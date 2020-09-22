export const checkDarkMode = () => {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
};

export const watchDarkMode = () => {
  if (!window.matchMedia) return;

  window.matchMedia('(prefers-color-scheme: dark)').addListener(addDarkModeSelector);
};

export const addDarkModeSelector = () => {
  document.documentElement.setAttribute(
    'data-mode',
    checkDarkMode() ? 'dark' : 'light',
  );
};

export default () => {
  addDarkModeSelector();
  watchDarkMode();
};
