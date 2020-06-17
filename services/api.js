import * as apiConfig from './twitter-config.json';

const api = {
  fetchTweets: ({username}) => {
    console.log(`https://api.twitter.com/1.1/search/tweets.json?q=from:${username}&result_type=mixed&count=10`)
    return fetch(`https://api.twitter.com/1.1/search/tweets.json?q=from:${username}&result_type=mixed&count=10`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiConfig.access_token}`,
      },
    }).then((response) => response.json());
  },
};

export default api;
