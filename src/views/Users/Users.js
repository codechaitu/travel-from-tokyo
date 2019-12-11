import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from "reactstrap";

import usersData from "./UsersData";

function UserRow(props) {
  const user = props.user;
  const userLink = `/users/${user.id}`;

  const getBadge = status => {
    return status === "Active"
      ? "success"
      : status === "Inactive"
      ? "secondary"
      : status === "Pending"
      ? "warning"
      : status === "Banned"
      ? "danger"
      : "primary";
  };

  return (
    <tr key={user.id.toString()}>
      <th scope="row">
        <Link to={userLink}>{user.id}</Link>
      </th>
      <td>
        <Link to={userLink}>{user.name}</Link>
      </td>
      <td>{user.registered}</td>
      <td>{user.role}</td>
      <td>
        <Link to={userLink}>
          <Badge color={getBadge(user.status)}>{user.status}</Badge>
        </Link>
      </td>
    </tr>
  );
}

class Users extends Component {
  render() {
    const userList = usersData.filter(user => user.id < 10);

    return <div className="animated fadeIn"></div>;
  }
}

export default Users;
