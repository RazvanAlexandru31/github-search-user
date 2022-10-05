import React from "react";
import {GiStarSwirl} from 'react-icons/gi'
import {CgEye} from 'react-icons/cg'
import {BiGitRepoForked} from 'react-icons/bi'

const ReposList = ({repo}) => {
  return (
    <div className="collapse mt-10">
      <input type="checkbox" className="peer" />
      <div className="collapse-title bg-base-300 text-sky-500 peer-checked:bg-base-300 peer-checked:text-sky-800 h-12">
        {repo.name}
      </div>
      <div className="collapse-content bg-base-200 text-sky-500 peer-checked:bg-base-200 peer-checked:text-sky-500 ">
        {repo.description ? (
            <h4 className="font-bold">{repo.description}</h4>
        ) : <h4 className="font-bold">No Description Provided</h4>}
        <div className="mt-5 flex align-middle"><GiStarSwirl color="gold" size={'30px'} style={{marginRight:'10px'}} title='Stars'/>{repo.stargazers_count}</div>
        <div className="mt-5 flex align-middle"><CgEye color="green" size={'30px'} style={{marginRight:'10px'}} title='Watching '/>{repo.watchers_count}</div>
        <div className="mt-5 flex align-middle"><BiGitRepoForked color="red" size={'30px'} style={{marginRight:'10px'}} title='Forks '/>{repo.forks}</div>
      </div>
    </div>
  );
};

export default ReposList;
