import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { Table, Icon } from 'semantic-ui-react';

import { getPosts } from "../../store/actions/getPosts";
import TableFrame from '../TableFrame/TableFrame';

import styles from "./SortedPosts.module.css";

const mapStateToProps = (state) => ({
    postsList: state.posts.posts,
    postsLoading: state.posts.loading,
});

const mapDispatchToProps = (dispatch) => ({
    getPosts: (userId) => dispatch(getPosts(userId)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

const SortedPosts = ({
    getPosts,
    postsList,
    postsLoading,
    userId 
     }) => {

    const renderPosts = (arr) => {
        if (arr.length === 0) {
            return <h3>No posts</h3>;
        }
        if (arr && !postsLoading) {
            return arr.map((item) => <TableFrame item={item} key={item.id} />);
        }
        return null;
    };

    useEffect(() => {
        getPosts(userId);
    }, []);

    const postsTable = renderPosts(postsList);

    return (
        <div >
            <h1 className={styles.title}>Posts</h1>
      <Table singleLine compact className={styles.tableUsers}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              width={6}
            >
              Title
        </Table.HeaderCell>
            <Table.HeaderCell
              width={7}
            >
              Body
        </Table.HeaderCell>
            
            <Table.HeaderCell
              width={1}
            >
              Show details
            <Icon
                link
                name="hand point down"
                color="blue"
                style={{ margin: '0' }}
              /></Table.HeaderCell>
          </Table.Row>
        </Table.Header>          
            {postsTable}
      </Table>
        </div>
    )
}
export default connector(SortedPosts);