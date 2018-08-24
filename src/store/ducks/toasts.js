// Types
export const Types = {
  DEFAULT: 'toasts/DEFAULT',
  INFO: 'toasts/INFO',
  SUCCESS: 'toasts/SUCCESS',
  WARNING: 'toasts/WARNING',
  ERROR: 'toasts/ERROR',
  SHOW_TOAST: 'toasts/SHOW_TOAST',
};

// Actions
export const Creators = {
  createToast: (message, type = Types.DEFAULT, options = { autoClose: 3000 }) => ({
    message,
    type,
    options,
  }),
};
