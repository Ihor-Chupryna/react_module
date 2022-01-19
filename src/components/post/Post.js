const Post = ({post: {id, userId, title, body}}) => {
    return (
        <div>
            <h2>id: {id}</h2>
            <h2>userId: {userId}</h2>
            <h2>title: {title}</h2>
            <h2>body: {body}</h2>
        </div>
    );
};

export default Post;