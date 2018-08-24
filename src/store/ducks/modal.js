// Types
export const Types = {
  OPEN: 'modal/OPEN',
  CLOSE: 'modal/CLOSE',
};

// Reducer
const INITIAL_STATE = {
  isOpen: false,
  location: {
    latitude: null,
    longitude: null,
  },
};

export default function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.OPEN:
      return {
        isOpen: true,
        location: action.payload.location,
      };
    case Types.CLOSE:
      return {
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
}

// Actions
export const Creators = {
  modalOpen: location => ({
    type: Types.OPEN,
    payload: { location },
  }),

  modalClose: () => ({
    type: Types.CLOSE,
  }),
};
