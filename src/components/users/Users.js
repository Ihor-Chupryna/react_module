import {useEffect, useState} from "react";

import User from "../user/User";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((value) => setUsers(value))
    }, []);

    return (
        <div>
            {users.map(value => <User user={value} key={value.id}/>)}
        </div>
    );
};

export default Users;