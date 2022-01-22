import {Link} from "react-router-dom";

import style from './User.module.css'

const User = ({user}) => {
    const {id, name} = user;

    return (
        <div className={style.userWrapper}>
            <Link to={id.toString()} state={user}><h2>{id}) {name}</h2></Link>
            <Link to={`${id}/albums`}>
                <button>Albums</button>
            </Link>
        </div>
    );
};

export {User};