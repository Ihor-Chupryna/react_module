import {useEffect, useState} from "react";

import Post from "../post/Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((value) => setPosts(value));
    }, []);

    return (
        <div>
            {posts.map(value => <Post post={value} key={value.id}/>)}
        </div>
    );
};

export default Posts;