import React from 'react'
import ReposList from './ReposList'

const Repos = ({repos}) => {
    console.log(repos)
  return (
    <div className='grid gap-4 grid-cols-2'>
        {repos.map((repo) => (
            <ReposList key={repo.id} repo={repo}/>
        ))}
    </div>
  )
}

export default Repos