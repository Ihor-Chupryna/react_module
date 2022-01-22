import {useLocation, useParams, Outlet, Link} from "react-router-dom";
import {useEffect, useState} from "react";

import {postService} from "../../services/postService";
import style from '../../style/DetailsStyle.module.css'

const PostDetailsPage = () => {
    const {postId} = useParams();
    const [post, setPost] = useState([]);
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            return setPost(state)
        }
        postService.getPost(postId).then(value => setPost({...value}))
    }, [postId, state])

    return (
        <div className={style.wrapper}>
            {post && (<div>
                <h4>post id: {post.id}</h4>
                <h4>user id: {post.userId}</h4>
                <h4>title: {post.title}</h4>
                <h4>body: {post.body}</h4>
            </div>)}
            <Link to={`comments`}>
                <button>comments</button>
            </Link>
            <Outlet/>
        </div>
    );
}

export {PostDetailsPage};