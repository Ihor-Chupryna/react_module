import User from "../users/User";

const Users = ({filteredUsers}) => {

    return (
        <div>
            {filteredUsers.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;