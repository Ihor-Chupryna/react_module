import {Link} from "react-router-dom";

import style from './Header.module.css'

const Header = () => {
    return (
        <div className={style.wrapper}>
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