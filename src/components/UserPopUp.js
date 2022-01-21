import React, {useEffect, useState} from 'react'
import RepoCard from './RepoCard'

function UserPopUp({avatar, username, followers, joinDate, following, bio, email, location}) {
    
    const [repos, setRepos] = useState()
    const [repoForm, setRepoForm] = useState("")
    const [filteredRepos, setFilteredRepos] = useState(repos)

    useEffect(() => {
        fetch(`https://api.github.com/users/${username}/repos`)
        .then(r => r.json())
        .then((repoList) => {
            setRepos(repoList)
            setFilteredRepos(repoList)

        })
        
    }, [])

    function handleRepoInput(e){
        setRepoForm(e.target.value)
        handleDesplayFilteredRepos()
    }
    
    function handleDesplayFilteredRepos(){
        if(repoForm !== ""){
           return setFilteredRepos( repos.filter((singleRepo)=> {
                return singleRepo.name.includes(repoForm)
            }))
        }else{
            return setFilteredRepos(repos)
        }
        
    }
    console.log(repoForm)

    return (
        <div>
            Pop Up
             <h2>{username} Profile</h2>
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
            
            {repos && filteredRepos ? filteredRepos.map((oneRepo) => <RepoCard oneRepo={oneRepo} /> ) : null}
        </div>
    )
}

export default UserPopUp