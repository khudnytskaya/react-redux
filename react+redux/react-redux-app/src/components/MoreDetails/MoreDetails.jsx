import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { getComments } from "../../store/actions/getComments";
import { deleteComment } from "../../store/actions/deleteComment";

import { Comment } from 'semantic-ui-react'

import styles from "./MoreDetails.module.css";
import PostDetails from '../PostDetails/PostDetails'; 
import DeleteCommentModal from './DeleteCommentModal';
import CommentListItem from './CommentListItem';

const mapStateToProps = (state) => ({
    commentsList: state.comments.comments,
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
}) => {
    const [currentComment, setCurrentComment] = useState();

    const [modalOpen, setModalOpen] = useState(false);
    const handleOpen = () => setModalOpen(true);
    const handleClose = () => setModalOpen(false);

    const handleRemove = (id) => {
        deleteComment(id);
        setModalOpen(false);
    };


    useEffect(() => {
        getComments(postId);
    }, []);

   
    return (
        <div >
            <PostDetails postId={postId} />
            <CommentListItem list={commentsList}
            config={{
              modalOpen,
              handleOpen,
              handleClose,
              handleRemove,
            }}/>
        </div>
    )
}
export default connector(MoreDetails);