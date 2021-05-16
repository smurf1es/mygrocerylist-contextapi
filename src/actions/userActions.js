import axios from 'axios';
import * as constants from '../constants/userConstants';

export const login = async (creds, dispatch) => {
  try {
    dispatch({
      type: constants.USER_LOGIN_REQUEST,
    });
    const config = {
      'Content-Type': 'application/json',
    };

    const { data } = await axios.post('/login', creds, config);
    dispatch({
      type: constants.USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: constants.USER_LOGIN_FAIL,
      payload: error,
    });
  }
};

export const register = async (creds, dispatch) => {
  try {
    dispatch({
      type: constants.USER_REGISTER_REQUEST,
    });
    const config = {
      'Content-Type': 'application/json',
    };

    const { data } = await axios.post('/register', creds, config);
    dispatch({
      type: constants.USER_REGISTER_SUCCESS,
      payload: data,
    });
    dispatch({
      type: constants.USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: constants.USER_REGISTER_FAIL,
      payload: error,
    });
  }
};
