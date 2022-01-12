import {useEffect, useState} from "react";

import Comment from "../comment/Comment";

const Comments = () => {
   const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((response) => response.json())
            .then((value) =>setComments(value));
    }, []);

    return (
        <div>
            {comments.map(value => <Comment comment={value} key={value.id}/>)}
        </div>
    );
};

export default Comments;