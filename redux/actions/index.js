import {TOGGLE_ACCOUNT} from '../types';

export const toggleAccount = (currentAccount) => {
  return {
    type: TOGGLE_ACCOUNT,
    payload: currentAccount,
  };
};
