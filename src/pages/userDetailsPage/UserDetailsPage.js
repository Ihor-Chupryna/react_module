import {useEffect, useState} from "react";
import {useLocation, useParams, Link, Outlet} from "react-router-dom";

import {userService} from "../../services/userService";
import style from '../../style/DetailsStyle.module.css'

const UserDetailsPage = () => {
    const {state} = useLocation();
    const {userId} = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (state) {
            return setUser(state)
        }
        userService.getUser(userId).then(value => setUser({...value}))
    }, [userId, state])

    return (
        <div className={style.wrapper}>
            {user && (<div>
                <h4>id: {user.id}</h4>
                <h3>name: {user.name}</h3>
                <h3>username: {user.username}</h3>
                <h3>email: {user.email}</h3>
                <h4>city: {user.address.city}</h4>
                <h4>street: {user.address.street}</h4>
                <h4>suite: {user.address.suite}</h4>
                <h4>phone: {user.phone}</h4>
                <h4>website: {user.website}</h4>
            </div>)}
            <Link to={`postsUser`} state={state}>
                <button>posts user</button>
            </Link>
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};