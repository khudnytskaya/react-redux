import axios from 'axios';

export const readPosts = (userId) => {
    return axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((response) => {
        console.log(response.data)
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
  };