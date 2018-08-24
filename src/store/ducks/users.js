// Types
export const Types = {
  ADD_REQUEST: 'users/ADD_REQUEST',
  ADD_SUCCESS: 'users/ADD_SUCCESS',
  ADD_FAILURE: 'users/ADD_FAILURE',

  REMOVE: 'users/REMOVE',
};

// Reducer
const INITIAL_STATE = {
  data: [],
  loading: false,
  error: null,
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case Types.ADD_SUCCESS:
      return {
        data: [...state.data, action.payload.user],
        loading: false,
        error: null,
      };
    case Types.ADD_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case Types.REMOVE:
      return {
        data: state.data.filter(user => user.id !== action.payload.user.id),
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}

// Actions
export const Creators = {
  addUserRequest: user => ({
    type: Types.ADD_REQUEST,
    payload: { user },
  }),

  addUserSuccess: user => ({
    type: Types.ADD_SUCCESS,
    payload: { user },
  }),

  addUserFailure: error => ({
    type: Types.ADD_FAILURE,
    payload: { error },
  }),

  removeUser: user => ({
    type: Types.REMOVE,
    payload: { user },
  }),
};
