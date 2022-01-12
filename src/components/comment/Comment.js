const Comment = ({comment}) => {
    return (
        <div>
            {comment.id}, {comment.name}, {comment.email}
        </div>
    );
};

export default Comment;