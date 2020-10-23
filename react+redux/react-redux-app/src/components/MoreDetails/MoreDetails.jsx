import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { getComments } from "../../store/actions/getComments";
import { deleteComment } from "../../store/actions/deleteComment";

import { Comment } from 'semantic-ui-react'

import styles from "./MoreDetails.module.css";
import PostDetails from '../PostDetails/PostDetails';

const mapStateToProps = (state) => ({
    commentsList: state.comments.comments,
    commentsLoading: state.comments.loading,
});

const mapDispatchToProps = (dispatch) => ({
    deleteComment: (id) => dispatch(deleteComment(id)),
    getComments: (postId) => dispatch(getComments(postId)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

const MoreDetails = ({
    getComments,
    postId,
    commentsList,
    commentsLoading
}) => {
   
    const renderComments = (arr) => {
        if (arr.length === 0) {
            return <h3>No comments</h3>;
        }
        if (arr && !commentsLoading) {
            return arr.map((item) => <Comment.Group key={item.id}
            className={styles.commentsStyle}> 
                <Comment>
                    <Comment.Content>
                        <Comment.Author>{item.name}</Comment.Author>
                        <Comment.Text>
                        {item.body}
                </Comment.Text>
                        <Comment.Actions>
                            <Comment.Action>Edit</Comment.Action>
                            <Comment.Action>Delete</Comment.Action>   
                        </Comment.Actions>
                    </Comment.Content>
                </Comment>
            </Comment.Group>);
        }
        return null;
    };

    useEffect(() => {
        getComments(postId);
    }, []);

    const comments = renderComments(commentsList);

    const handleRemove = (id) => {
        deleteComment(id);
        // setModalOpen(false);
      };

    return (
        <div >
            <PostDetails postId={postId} />
            {comments}
        </div>
    )
}
export default connector(MoreDetails);