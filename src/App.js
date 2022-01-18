import {useState} from "react";

import css from './App.module.css'
import Users from "./components/users/Users";
import UserDetails from "./components/userDetails/UserDetails";
import Posts from "./components/posts/Posts";



function App() {
const [user, setUser] = useState(null);
const [userId, setUserId] = useState(null)

const getUser = (user) => {
setUser(user)
    setUserId(null)
}

const getUserId = (id) => {
    setUserId(id)
    console.log(id)
}

  return (
    <div>
        <div className={css.main}>
            <Users getUser={getUser}/>
            {user && <UserDetails user={user} getUserId={getUserId}/>}
        </div>
        <hr/>
        {userId && <Posts userId={userId}/>}

    </div>
  );
}

export default App;
