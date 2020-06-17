import {TOGGLE_ACCOUNT, DATA_FETCH} from '../types';

export const toggleAccount = (currentAccount) => {
  return {
    type: TOGGLE_ACCOUNT,
    payload: currentAccount,
  };
};

export const fetchData = (currentAccount) => {
  return {
    type: DATA_FETCH,
    payload: currentAccount,
  };
};
