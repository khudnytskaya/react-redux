import axios from 'axios';

export const readPosts = () => {
    return axios
      .get(`https://jsonplaceholder.typicode.com/posts?userId=1`)
      .then((response) => {
        console.log(response.data)
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
  };