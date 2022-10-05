import React from "react";
import { CircleLoader } from "react-spinners";
import GithubContext from "../../context/GithubContext";
import { useContext } from "react";
import UserItem from "./UserItem";

const UserList = () => {

  const {users, isLoading} = useContext(GithubContext)


  if (!isLoading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 place-items-center">
        {users.map((user) => (
          <UserItem key={user.id} user={user}/>
        ))}
      </div>
    );
  } else {
    return (
      <div className="grid place-items-center">
        <CircleLoader color="#194aa8" size={'120px'} />
      </div>
    );
  }
};

export default UserList;
