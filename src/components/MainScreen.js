import React, {useState} from 'react'
import UserCard from './UserCard'

 function MainScreen() {

    const [userInput, setUserInput] = useState('')
    const [userList, setUserList] = useState()

    function displayUsers (){
        fetch(`https://api.github.com/search/users?q=${userInput}&?page=1&per_page=10`)
        .then(r => r.json()
        .then(userInfo => setUserList(userInfo))
         )
    }
   

    function handleOnChange(e){
        setUserInput(e.target.value)
        displayUsers()
    }
    console.log(userList)

    return  (
        <div>
            <h1>GitHub Search</h1>
            <form>
                <label>
                <input
                value = {userInput}
                name = "search"
                onChange = {handleOnChange}
                type = "search"
                />
                </label>
            </form>
        { userList && userList["items"] ? 
        userList["items"].map((oneUser)=> <UserCard
        avatar={oneUser.avatar_url}
        
        /> )  : "Loading" }
        </div>
    )
}

export default MainScreen