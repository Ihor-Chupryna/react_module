import {useEffect, useState} from "react";

import User from "../user/User";
import {getUsers} from "../../services/userService";

const Users = ({getUser}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers(value))
    }, [])

    return (
        <div>
            {users.map(user => <User key={user.id} user={user} getUser={getUser}/>)}
        </div>
    );
};

export default Users;