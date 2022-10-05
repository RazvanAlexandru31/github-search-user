import React from "react";
import { useState } from "react";
import { useContext } from "react";
import GithubContext from "../../context/GithubContext";
import AlertContext from "../../context/AlertContext";

const UserSearch = () => {
  const [text, setText] = useState("");
  const { users, getUsers, clearUsersList } = useContext(GithubContext);
  const {setAlert} =useContext(AlertContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    if (!text) {
      setAlert("Please make sure you entered a valid name.", 'error');
    } else {
      getUsers(text);
      resetInputField();
    }
  };

  const resetInputField = () => {
    setText("");
  };

  return (
    <div className="grid place-content-center">
      <form className="w-96" onSubmit={handleSubmit}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
        >
          Search
        </label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="default-search"
            className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
            placeholder="Search users..."
            required=""
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
      {users.length > 0 && (
        <div className="grid place-content-center">
          <button onClick={clearUsersList} className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-4">
            Clear Users
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
