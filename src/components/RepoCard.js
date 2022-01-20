import React from 'react'

 function RepoCard({oneRepo}) {

    function handleOpenRepo(){
        window.open(oneRepo.html_url)
    }
    return oneRepo ? (
        <div>
            <h2>Name: {oneRepo.name}</h2>
            <h3>Forks: {oneRepo.forks}</h3>
            <h3>Stars: {oneRepo.stargazers_count}</h3>
            <button onClick={handleOpenRepo}>Repo link</button>
        </div>
    ) : null
}

export default RepoCard