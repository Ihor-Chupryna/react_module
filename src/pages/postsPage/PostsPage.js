import {useEffect, useState} from "react";
import {Outlet} from 'react-router-dom';

import style from '../../style/ListStyle.module.css'
import {postService} from "../../services/postService";
import {Post} from "../../components";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts([...value]))
    }, [])

    return (
        <>
            <h1>Posts:</h1>
            <div className={style.wrapper}>
                <div className={style.list}>
                    {posts.map(post => <Post key={post.id} post={post}/>)}</div>
                <Outlet/>
            </div>
        </>
    );
};

export {PostsPage};