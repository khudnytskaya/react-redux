import React from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";

const TableFrame = ({
    item: { id, name, email, username, title, body },
}) => {
    const history = useHistory();

    return (
        <Table.Body>
            <Table.Cell>{name || title}</Table.Cell>
            <Table.Cell>{email || body}</Table.Cell>
            <Table.Cell>{username || ''}</Table.Cell>

            <Table.Cell>
                {name && username && email ? (<Button
                    onClick={() => history.push(`posts/${id}`)}
                >
                    Watch
                    <Icon
                        link
                        name="eye"
                        color="blue"
                        style={{ marginLeft: '7px' }}
                    />
                </Button>
                ) : (
                        <Button
                        // onClick={() => history.push(`posts/${id}`)}
                        >
                            Details
                            <Icon
                                link
                                name="eye"
                                color="blue"
                                style={{ marginLeft: '7px' }}
                            />
                        </Button>
                    )}


            </Table.Cell>
        </Table.Body>
    )
}
export default TableFrame;



