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
        <div className="flex-user-container">
            {popUp ? 
            
            <div >
            <img  height="100" width="100" src={avatar} />
            <UserPopUp 
            avatar={avatar}
             username={username} 
             followers={userInfo.followers}
             following={userInfo.following}
             bio={userInfo.bio}
             email={userInfo.email}
             location={userInfo.location}
             joinDate={userInfo.created_at}
              /> 
              </div>: 
              
              <button onClick={handleClickPopUpUser}>More Info</button>}
             <h2>{username}</h2>
            
            <h3>Public Repos: {userInfo.public_repos}</h3>
            
            </div> 
            
    ) : null
}

export default UserCards
