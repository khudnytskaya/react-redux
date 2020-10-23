import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { getComments } from "../../store/actions/getComments";
import { deleteComment } from "../../store/actions/deleteComment";

import { Comment, Button } from 'semantic-ui-react'

import styles from "./MoreDetails.module.css";
import DeleteCommentModal from './DeleteCommentModal';

const mapDispatchToProps = (dispatch) => ({
    deleteComment: (id) => dispatch(deleteComment(id)),
    getComments: (postId) => dispatch(getComments(postId)),
});

const connector = connect(null, mapDispatchToProps);

const CommentListItem = ({
    list,
    config,
    getComments,
    postId
}) => {
    const [currentComment, setCurrentComment] = useState();

    const [modalOpen, setModalOpen] = useState(false);
    const handleOpen = () => setModalOpen(true);
    const handleClose = () => setModalOpen(false);

    const handleRemove = (id) => {
        deleteComment(id);
        setModalOpen(false);
    };

    const renderComments = (list) => {
        if (list.length === 0) {
            return <h3>No comments</h3>;
        }
        if (list) {
            return list.map((comment) => <Comment.Group key={comment.id}
                className={styles.commentsStyle}>
                <Comment>
                    <Comment.Content>
                        <Comment.Author>{comment.name}</Comment.Author>
                        <Comment.Text>
                            {comment.body}
                        </Comment.Text>
                        <Comment.Actions>
                            <Button config={{
                                modalOpen,
                                handleOpen,
                                handleClose,
                                handleRemove,
                            }}
                                onClick={() => {
                                    setCurrentComment(comment);
                                    config.handleOpen(true);
                                }}
                            >Edit</Button>
                            <Button config={{
                                modalOpen,
                                handleOpen,
                                handleClose,
                                handleRemove,
                            }}
                                onClick={() => {
                                    setCurrentComment(comment);
                                    config.handleOpen(true);
                                }}>Delete</Button>
                        </Comment.Actions>
                    </Comment.Content>
                </Comment>
                <DeleteCommentModal comment={currentComment} config={config} />
            </Comment.Group>);
        }
        return null;
    };

    useEffect(() => {
        getComments(postId);
    }, []);

    const comments = renderComments(list);


    return (
        <div >
            {comments}
        </div>
    )
}
export default connector(CommentListItem);