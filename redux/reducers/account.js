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

const initialState = {
  user: twitterAccounts.trump,
  isLoading: true,
  error: false,
};

const AccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ACCOUNT:
      state = toggle(state);
      break;
    case DATA_FETCH_SUCCEEDED:
      state = setTweets(state, action.payload);
      break;
  }
  return state;
};

function toggle(state) {
  if (state.user.title === twitterAccounts.trump.title) {
    state.user = twitterAccounts.hillary;
  } else {
    state.user = twitterAccounts.trump;
  }
  return {
    isLoading: false,
    error: false,
    user: state.user,
  };
}

function setTweets(state, tweets) {
  twitterAccounts.trump.data = tweets.trump.statuses;
  twitterAccounts.hillary.data = tweets.hillary.statuses;
  return {
    isLoading: false,
    error: false,
    user: state.user,
  };
}

export default AccountReducer;
