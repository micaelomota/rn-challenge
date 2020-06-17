import * as apiConfig from './twitter-config.json';

const api = {
  fetchTweets: (username) => {
    return fetch(`https://api.twitter.com/1.1/search/tweets.json?q=from:${username}&result_type=mixed&count=20`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiConfig.access_token}`,
      },
    }).then((response) => response.json());
  },
};

export default api;
