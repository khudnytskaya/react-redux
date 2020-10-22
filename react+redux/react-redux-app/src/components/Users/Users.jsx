import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getUsers } from "../../store/actions/getUsers";
import { Table, Button, Icon } from 'semantic-ui-react';
import styles from "./Users.module.css";
import TableFrame from "../TableFrame/TableFrame"

const mapStateToProps = (state) => ({
  usersList: state.users.users,
  usersLoading: state.users.loading,
});
const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch(getUsers()),
});
const connector = connect(mapStateToProps, mapDispatchToProps);

const Users = ({ getUsers, usersList, usersLoading }) => {
  const [list, setList] = useState(usersList || []);

  const renderUsers = (arr) => {
    if (arr.length === 0) {
      return <h3>No users</h3>;
    }
    if (arr && !usersLoading) {
      return arr.map((item) => <TableFrame item={item} key={item.id} />);
    }
    return null;
  };

  const usersTable = renderUsers(list);

  useEffect(() => {
    getUsers();
    setList(usersList)
  }, [getUsers]);

  return (
    <div>
      <h1 className={styles.title}>Users</h1>
      <Table singleLine compact className={styles.tableUsers}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              width={5}
            >
              Full Name
        </Table.HeaderCell>
            <Table.HeaderCell
              width={6}
            >
              Email
        </Table.HeaderCell>
            <Table.HeaderCell
              width={3}
            >
              Username
        </Table.HeaderCell>
            <Table.HeaderCell
              width={4}
            >
              Show posts
            <Icon
                link
                name="hand point down"
                color="blue"
                style={{ margin: '0' }}
              /></Table.HeaderCell>
          </Table.Row>
        </Table.Header>          
            {usersTable}
      </Table>
    </div>
  );
};

export default connector(Users);