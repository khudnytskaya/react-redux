import React from "react";
import { Button, Modal } from "semantic-ui-react";
import axios from 'axios';

const ModalFooter = ({ id, onClose, title, bodyText }) => {

  const post = {
    id: id,
    title: title,
    body: bodyText
  }

  const addPost = async (_id) => {
    await axios.post(`https://jsonplaceholder.typicode.com/posts`, { post })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
    onClose();
  };

  return (
    <Modal.Actions>
      <Button color="black" onClick={onClose}>
        Cancel
      </Button>

      <Button
        positive
        type='submit'
        icon="heart outline"
        labelPosition="right"
        content="Add"
        onClick={() => addPost(id)}
      />

    </Modal.Actions>
  );
};
export default ModalFooter;
