import React, {useState, useEffect} from 'react'

 function UserCards({avatar, username}) {

    const [userInfo, setUserInfo] = useState()


    useEffect(() => {
        if (username){
        
            fetch(`https://api.github.com/users/${username}`)
        .then(r => r.json())
        .then((repoData) => setUserInfo(repoData))
        
    }else{
        return null
    }
    }, [username])
   
       
        console.log(userInfo)
  


    return userInfo ? (
        <div>
            <h2>{username}</h2>
            <img height="100" width="100" src={avatar} />
            <h3>Public Repos: {userInfo.public_repos}</h3>
        </div>
    ) : null
}

export default UserCards
