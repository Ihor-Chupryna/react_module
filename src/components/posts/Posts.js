import {useEffect, useState} from "react";

import {getPost} from "../../services/postService";
import Post from "../post/Post";

const Posts = ({userId}) => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPost(userId).then(value => setPosts(value))
    }, [userId])

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;