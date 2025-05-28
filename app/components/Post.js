import Link from "next/link";

const Post = ({post}) => {
    return (
        <div>
            <Link href="/">Назад</Link>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <stromg>Autor I: {post.userID}D</stromg>
        </div>
    )
}

export default Post;