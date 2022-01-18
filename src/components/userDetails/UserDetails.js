const UserDetails = ({user, getUserId}) => {
    const {id, name, username, email} = user;
    const {city, street} = user.address

    return (
        <div>
            <h2>id: {id}</h2>
            <h2>name: {name}</h2>
            <h2>username: {username}</h2>
            <h3>email: {email}</h3>
            <h3>city: {city}</h3>
            <h3>street: {street}</h3>
            <button onClick={() => getUserId(id)}>Posts</button>
        </div>
    );
};

export default UserDetails;