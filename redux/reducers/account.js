import {TOGGLE_ACCOUNT, DATA_FETCH_SUCCEEDED} from '../types';


const twitterAccounts = {
  trump: {
    title: 'Donald Trump',
    username: 'realDonaldTrump',
    data: [],
  },
  hillary: {
    title: 'Hillary Clinton',
    username: 'HillaryClinton',
    data: [],
  },
};

const AccountReducer = (state = twitterAccounts.trump, action) => {
  console.log(`account reducer ${action.type}`);
  switch (action.type) {
    case TOGGLE_ACCOUNT:
      state = toggle(state);
      return state;
    case DATA_FETCH_SUCCEEDED:
      state = setTweets(state, action.payload.statuses);
    default:
      return state;
  }
};

function toggle(account) {
  if (account.title === twitterAccounts.trump.title) {
    return twitterAccounts.hillary;
  }
  return twitterAccounts.trump;
}

function setTweets(account, tweets) {
  if (account.title === twitterAccounts.trump.title) {
    twitterAccounts.trump.data = tweets;
    return twitterAccounts.trump;
  }
  twitterAccounts.hillary.data = tweets;
  return twitterAccounts.hillary;
}

export default AccountReducer;
