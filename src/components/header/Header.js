import {Link} from "react-router-dom";

import style from './Header.module.css'

const Header = () => {
    return (
        <div className={style.wrapper}>
            <Link to='/'>
                <button>HOME</button>
            </Link>
            <Link to='/users'>
                <button>USERS</button>
            </Link>
            <Link to='/posts'>
                <button>POSTS</button>
            </Link>
        </div>
    );
};

export {Header};