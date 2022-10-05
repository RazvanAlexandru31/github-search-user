import React from "react";
import { useEffect, useContext } from "react";
import GithubContext from "../context/GithubContext";
import { useParams } from "react-router-dom";
import Repos from "../componets/Repos/Repos";

const User = () => {
  const { getTheUser, user, getRepos, repos } = useContext(GithubContext);
  const params = useParams();

  useEffect(() => {
    getTheUser(params.login);
    getRepos(params.login)
  }, []);

  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={user.avatar_url}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="profile"
          />
          <div>
            <h2 className="text-5xl font-bold">{user.login}</h2>
            <p className="py-6">{user.bio}</p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="link link-accent"
            >
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>
      <div className="stats stats-vertical lg:stats-horizontal shadow grid">
        <div className="stat grid place-items-center">
          <div className="stat-title">Followers</div>
          <div className="stat-value">{user.followers}</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Public Repos</div>
          <div className="stat-value">{user.public_repos}</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Public Gists</div>
          <div className="stat-value">{user.public_gists}</div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title">Following</div>
          <div className="stat-value">{user.following}</div>
        </div>
      </div>
      <div className="stats shadowstats-vertical lg:stats-horizontal shadow grid mt-10 bg-base-200">
        {user.location && (
          <div className="stat place-items-center">
            <div className="stat-title">Location</div>
            <div className="stat-value">{user.location}</div>
          </div>
        )}

        {user.blog && (
          <div className="stat place-items-center">
            <div className="stat-title">Website</div>
            <a
              className="stat-value text-secondary"
              href={`https://${user.blog}`}
              target="_blank"
              rel="noreferrer"
            >
              {user.blog}
            </a>
          </div>
        )}

        {user.twitter_username && (
          <div className="stat place-items-center">
            <div className="stat-title">Twitter</div>
            <a
              className="stat-value"
              href={`https://twitter.com/${user.twitter_username}`}
              target="_blank"
              rel="noreferrer"
            >
              {user.twitter_username}
            </a>
          </div>
        )}
      </div>
      <Repos repos={repos}/>
    </div>
  );
};

export default User;
