import axios from 'axios';
import BOOKS_ON_SEARCH_KEY_URL from '../URL/Books.url';

export default (keyToSearch) => {
  console.log('making call');
  return axios.get(BOOKS_ON_SEARCH_KEY_URL, {
    params: {
      q: keyToSearch,
    },
  });
};
