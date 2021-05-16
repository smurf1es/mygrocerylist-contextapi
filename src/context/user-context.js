import { useReducer, createContext } from 'react';
import * as constants from '../constants/userConstants';

export const UserContext = createContext();

const initialState = {
  loading: false,
  userInfo: null,
  error: null,
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case constants.USER_LOGIN_REQUEST:
      return {
        loading: true,
      };
    case constants.USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };
    case constants.USER_LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case constants.USER_REGISTER_REQUEST:
      return {
        loading: true,
      };
    case constants.USER_REGISTER_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };
    case constants.USER_REGISTER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case constants.USER_LOGOUT:
      return state;
    default:
      return state;
  }
};

export const UserContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {props.children}
    </UserContext.Provider>
  );
};
