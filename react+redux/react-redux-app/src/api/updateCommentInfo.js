import axios from 'axios';

export const updateCommentInfo = (comment) => {
    return axios
      .put(`https://jsonplaceholder.typicode.com/posts/${comment.id}`, { comment })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
  };