import React, {useEffect, useState} from 'react'
import RepoCard from './RepoCard'

function UserPopUp({avatar, username, followers, joinDate, following, bio, email, location}) {
    
    const [repos, setRepos] = useState()
    const [repoForm, setRepoForm] = useState()
    const [filteredRepos, setFilteredRepos] = useState(repos)

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}/repos`)
        .then(r => r.json())
        .then((repoList) => setRepos(repoList))
        
    }, [])

    function handleRepoInput(e){
        setRepoForm(e.target.value)
    }
    
    function handleDesplayFilteredRepos(){
        repos.filter((oneRepo)=> {
            
        })
    }

    return (
        <div>
            Pop Up
            <h2>{username}</h2>
            <h3>Followers: {followers}</h3>
            <h3>Following: {following}</h3>
            <h3>Bio:</h3>
            <p>{bio}</p>
            <h3>Email: {email}</h3>
            <h3>Location: {location} </h3>
            <h3>Join Date: {joinDate}</h3>
            <form>
                <input 
                type="search"
                name="search"
                value={repoForm}
                onChange={handleRepoInput}
                />
            </form>
            <img  height="100" width="100" src={avatar} />
            {repos ? repos.map((oneRepo) => <RepoCard oneRepo={oneRepo} /> ) : null}
        </div>
    )
}

export default UserPopUp