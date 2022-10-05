import React from "react";
import UserList from "../componets/users/UserList";
import UserSearch from "../componets/users/UserSearch";

const Home = () => {
  return (
    <>
      <UserSearch />
      <UserList />
    </>
  );
};

export default Home;
