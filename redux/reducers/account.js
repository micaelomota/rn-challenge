import {TOGGLE_ACCOUNT} from '../types';


const twitterAccounts = {
  trump: {
    title: 'Donald Trump',
    username: 'realDonaldTrump',
  },
  hillary: {
    title: 'HillaryClinton',
    username: 'HillaryClinton',
  },
};

const AccountReducer = (state = twitterAccounts.trump, action) => {
  switch (action.type) {
    case TOGGLE_ACCOUNT:
      state = toggle(state);
    default:
      return state;
  }
};

function toggle(account) {
  console.log(`toggle ${account}`);
  if (account.title === twitterAccounts.trump.title) {
    return twitterAccounts.hillary;
  }
  return twitterAccounts.trump;
}

export default AccountReducer;
