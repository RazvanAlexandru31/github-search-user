import React from "react";
import { Link } from "react-router-dom";

const UserItem = ({ user }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={user.avatar_url} alt="Shoes" className="rounded-xl flex-1" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{user.login}</h2>
        <div className="card-actions">
          <Link to={`user/${user.login}`}
            type="button"
            class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
