import { AiFillDelete } from "react-icons/ai";
import React, { useContext } from "react";
import { PostList } from "../store/post-list-provider";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <>
      <div className="card post-card" style={{ width: "30rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {post.title}
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              onClick={() => deletePost(post.id)}
            >
              <AiFillDelete />
            </span>
          </h5>

          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span key={tag} className="badge hashtag text-bg-primary">
              #{tag}
            </span>
          ))}

          <div className="alert reactions alert-success" role="alert">
            This Post has been reacted by {post.reactions.likes} people.
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
