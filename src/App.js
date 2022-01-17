import {useEffect, useState} from "react";

import Form from "./components/form/Form";
import Users from "./components/user/Users";
import {getUsers} from "./services/userService";


function App() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([])

    useEffect(() => {
        getUsers().then(value => {
            setUsers([...value])
            setFilteredUsers([...value])
        })

    }, [])

    const getFilter = (data) => {
        let filterArr = [...users];

        if (data.name) {
            filterArr = filterArr.filter(user => user.name.toLowerCase().includes(data.name.toLowerCase()))
        } else if (data.username) {
            filterArr = filterArr.filter(user => user.username.toLowerCase().includes(data.username.toLowerCase()))
        } else if (data.email) {
            filterArr = filterArr.filter(user => user.email.toLowerCase().includes(data.email.toLowerCase()))
        }
        setFilteredUsers(filterArr)
    }
  return (
    <div>
          <Form getFilter={getFilter}/>
           <Users filteredUsers={filteredUsers}/>
    </div>
  );
}

export default App;
