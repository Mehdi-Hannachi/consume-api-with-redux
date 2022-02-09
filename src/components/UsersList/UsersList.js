import React from "react";
import { useSelector } from "react-redux";
import UserCard from "../UserCard/UserCard";

const UsersList = () => {
  const users = useSelector((state) => state.userReducer.users);
  const loading = useSelector((state) => state.userReducer.loading);

  return loading ? (
    <h1>Belehi stana</h1>
  ) : (
    <div>
      UsersList
      {users && users.map((user) => <UserCard user={user} key={user.id} />)}
    </div>
  );
};

export default UsersList;
