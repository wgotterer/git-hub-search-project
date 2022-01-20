import React, {useState, useEffect} from 'react'
import UserPopUp from './UserPopUp'

 function UserCards({avatar, username}) {

    const [userInfo, setUserInfo] = useState()
    const [popUp, setPopUP] = useState(false)


    useEffect(() => {
        if (username){
        
            fetch(`https://api.github.com/users/${username}`)
        .then(r => r.json())
        .then((repoData) => setUserInfo(repoData))
        
    }else{
        return null
    }
    }, [username])
   
    
    function handleClickPopUpUser(){
        setPopUP(true)
    }
  


    return userInfo ? (
        <div>
            <h2>{username}</h2>
            <img  height="100" width="100" src={avatar} />
            <h3>Public Repos: {userInfo.public_repos}</h3>
            {popUp ? <UserPopUp /> : 
            <button onClick={handleClickPopUpUser}>More Info</button>}
        </div>
    ) : null
}

export default UserCards
