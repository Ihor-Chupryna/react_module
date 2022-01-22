import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {commentsService} from "../../services/commentService";

const CommentsPage = () => {
    const {postId} = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getCommentsPost(postId).then(value => setComments([...value]))
    }, [postId])

    return (
        <div>
            {comments.map(comment => <div key={comment.id}>- {comment.name}</div>)}
        </div>
    );
};

export {CommentsPage};