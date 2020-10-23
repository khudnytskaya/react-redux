import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

const DeleteUserModal = ({ comment, config }) => {
  return (
    <Modal open={config.modalOpen} onClose={config.handleClose}>
      <Header icon="trash alternate" content="Delete comment" />
      <Modal.Content>
        <p>Are you sure you want to permanently delete this comment?</p>
      </Modal.Content>
      <Modal.Actions>
        <Button color="red" inverted onClick={config.handleClose}>
          <Icon name="remove" /> No
        </Button>
        <Button
          color="green"
          inverted
          onClick={() => {
            console.log(comment.id);
            config.handleRemove(comment.id);
          }}
        >
          <Icon name="checkmark" /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default DeleteUserModal;