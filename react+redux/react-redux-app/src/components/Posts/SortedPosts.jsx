import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";

import { getPosts } from "../../store/actions/getPosts";
import TableFrame from '../TableFrame/TableFrame';

const mapStateToProps = (state) => ({
    postsList: state.posts.posts,
    postsLoading: state.posts.loading,
});

const mapDispatchToProps = (dispatch) => ({
    getPosts: () => dispatch(getPosts()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

const SortedPosts = ({
    getPosts,
    postsList,
    postsLoading,
    userId }) => {

    const renderPosts = (arr) => {
        if (arr.length === 0) {
            return <h3>No posts</h3>;
        }
        if (arr && !postsLoading) {
            return arr.map((item) => <TableFrame item={item} key={item.id} />);
        }
        return null;
    };

    const [filterPosts, setFilterPosts] = useState(postsList || []);

    useEffect(() => {
        console.log(userId)
        getPosts(userId);
        if (userId) {
            setFilterPosts(
                postsList.filter((item) => item.userId === userId)
            );
        } else {
            setFilterPosts(postsList);
        }
    }, [userId, getPosts]);

    const postsTable = renderPosts(filterPosts);

    return (
        <div >
            {userId}
            {postsTable}
        </div>
    )
}
export default connector(SortedPosts);