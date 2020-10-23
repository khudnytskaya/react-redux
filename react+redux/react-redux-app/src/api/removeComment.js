import axios from 'axios';

export const removeComment = (id) => {
    return axios
      .remove(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
  };