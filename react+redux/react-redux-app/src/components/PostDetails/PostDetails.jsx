import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { Button, Divider, Form, Grid, Segment, List, Modal } from 'semantic-ui-react';
import { getPosts } from "../../store/actions/getPosts";
import ModalFooter from "./ModalFooter";
import { useHistory } from "react-router-dom";


import styles from "./PostDetails.module.css";

const mapStateToProps = (state) => ({
    postsList: state.posts.posts,
    postsLoading: state.posts.loading,
});

const mapDispatchToProps = (dispatch) => ({
    getPosts: (userId) => dispatch(getPosts(userId)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

const PostDetails = ({
    postsList,
    postsLoading,
    postId
}) => {
    const history = useHistory();

    const [filteredPost, setFilterPost] = useState(postsList);
    const [open, setOpen] = useState(false);

    const [title, setTitle] = useState("");
    const [bodyText, setBodyText] = useState("");

    const show = () => setOpen(true);
    const close = () => setOpen(false);

    const renderPosts = (arr) => {
        if (arr.length === 0) {
            return <h3>No posts</h3>;
        }
        if (arr && !postsLoading) {
            return arr.map((item) => <Segment className={styles.postStyle} key={item.id} placeholder>
                <Grid columns={2} relaxed='very' stackable>
                    <Grid.Column>
                        <List divided relaxed>
                            <List.Item>
                                <List.Icon name='sticky note outline' size='large' verticalAlign='middle' />
                                <List.Content>
                                    <List.Header as='a'>{item.title}</List.Header>
                                    <List.Description as='a'>{item.body}</List.Description>
                                </List.Content>
                            </List.Item>
                        </List>
                    </Grid.Column>

                    <Grid.Column verticalAlign='middle'>
                        <Button
                            onClick={() => show()}
                            className={styles.buttonStyle}
                            content='Add new' icon='signup' size='big'  >
                        </Button >
                        <Button
                            onClick={() => history.push(`/moreDetails/${postId}`)}
                            className={styles.buttonStyle}
                            content='Full info' icon='info circle' size='big'  >
                        </Button >
                    </Grid.Column>

                </Grid>

                <Divider vertical>Or</Divider>
            </Segment>);
        }
        return null;
    };

    useEffect(() => {
        setFilterPost(
            postsList.filter((item) => item.id == postId)
        );
    }, [postId]);

    const postsTable = renderPosts(filteredPost);

    return (
        <div >
            <h1 className={styles.title}>Details</h1>
            {postsTable}
            <Modal dimmer="blurring" open={open} onClose={close} >
                <Modal.Header>Do you want to add a new post?</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Form>
                            <Form.Field>
                                <label>Title</label>
                                <input placeholder='Title' name="title" value={title}
                                    onChange={e => setTitle(e.target.value)} />
                            </Form.Field>
                            <Form.Field>
                                <label>Post Text</label>
                                <input placeholder='Post Text' name="bodyText"
                                    value={bodyText}
                                    onChange={e => setBodyText(e.target.value)} />
                            </Form.Field>
                        </Form>
                    </Modal.Description>
                </Modal.Content>
                <ModalFooter onClose={close} id={postId} title={title} bodyText={bodyText}/>
            </Modal>
        </div>
    )
}
export default connector(PostDetails);