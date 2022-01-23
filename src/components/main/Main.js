import {Outlet} from 'react-router-dom';

import {Header} from "../header/Header";
import style from './Main.module.css'

const Main = () => {
    return (
        <div>
            <Header/>
            <div className={style.wrapper}><Outlet/></div>
        </div>
    );
};

export {Main};