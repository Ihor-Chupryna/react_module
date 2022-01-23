import {useEffect, useState} from "react";
import {Outlet} from 'react-router-dom'

import {userService} from "../../services/userService";
import {User} from "../../components";
import style from '../../style/ListStyle.module.css'

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers([...value]))
    }, [])

    return (
        <>
            <h1>Users:</h1>
            <div className={style.wrapper}>
                <div className={style.list}>
                    {users.map(user => <User key={user.id} user={user}/>)}</div>
                <Outlet/>
            </div>
        </>
    );
};

export {UsersPage};