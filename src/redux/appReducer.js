import { SHOW_LOADER, HIDE_LOADER, DARK_MODE } from './types';

const initialState = {
  loading: false,
  darkMode: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    case DARK_MODE:
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
};
