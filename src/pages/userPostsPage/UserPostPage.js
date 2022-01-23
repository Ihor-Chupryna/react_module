import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

import {postService} from "../../services/postService";

const UserPostPage = () => {
    const {state: {id}} = useLocation();
    const [postsUser, setPostUser] = useState([]);

    useEffect(() => {
        postService.getPostsUser(id).then(value => setPostUser([...value]))
    }, [id])

    return (
        <div>
            {postsUser.map(value => <div key={value.id}> -{value.title}</div>)}
        </div>
    );
};

export {UserPostPage};