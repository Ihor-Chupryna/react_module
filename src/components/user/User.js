const User = ({user}) => {
    return (
        <div className={'user-style'}>
            <h2>ID: {user.id}</h2>
            <h1>name: {user.name}</h1>
            <h2>user name: {user.username}</h2>
            <h3>email: {user.email}</h3>
        </div>
    );
};

export default User;