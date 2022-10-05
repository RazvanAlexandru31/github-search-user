import { createContext, useReducer } from "react";
import GithubReducer from "./GithubReducer";

const GithubContext = createContext();
const url = "https://api.github.com";

export const GithubProvider = ({ children }) => {
  const intialState = {
    users: [],
    user: {},
    repos: [],
    isLoading: false,
  };

  const getUsers = async (text) => {
    const params = new URLSearchParams({
      q: text,
    });

    setLoading();
    const response = await fetch(`${url}/search/users?${params}`);
    const { items } = await response.json();
    console.log(items);
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };

  const setLoading = () =>
    dispatch({
      type: "SET_LOADING",
    });

  const clearUsersList = () =>
    dispatch({
      type: "CLEAR_USERS",
    });

  // get the one user
  const getTheUser = async (login) => {
    setLoading();
    const response = await fetch(`${url}/users/${login}`);
    if (response.status === 404) {
      window.location = "/*";
    } else {
      const data = await response.json();
      dispatch({
        type: "GET_USER",
        payload: data,
      });
    }
  };

      //get user repos
      const getRepos = async (login) => {
        const params = new URLSearchParams({
          sort: 'created',
          per_page: 10
        });
        setLoading();
        const response = await fetch(`${url}/users/${login}/repos?${params}`);
        const data = await response.json();
        dispatch({
          type: "GET_REPOS",
          payload: data,
        });
      };

  const [state, dispatch] = useReducer(GithubReducer, intialState);

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        isLoading: state.isLoading,
        getUsers,
        clearUsersList,
        user: state.user,
        getTheUser,
        repos: state.repos,
        getRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
