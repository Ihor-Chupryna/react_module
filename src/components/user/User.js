import style from './User.module.css'

const User = ({user, getUser}) => {
    const {id, name} = user;

    return (
        <div>
           <div className={style.wrapper}>
               <h3>{id}. {name}</h3>
               <button onClick={()=>getUser(user)}>user details</button>
        </div>
        </div>
    );
};

export default User;