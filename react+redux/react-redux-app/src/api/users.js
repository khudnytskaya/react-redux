import axios from 'axios';

export const readUsers = () => {
    return axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
  };