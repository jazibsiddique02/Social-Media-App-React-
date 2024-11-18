import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type == "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type == "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: reactions,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going Lahore",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo suscipit saepe obcaecati voluptate ullam esse molestias. Dolorum tempora itaque dolores nihil tempore! Quas libero maiores explicabo ipsum fugit officia suscipit quo laborum facere nam.",
    reactions: 2,
    userId: "user-9",
    tags: ["Cool", "Nice", "Vacation"],
  },
  {
    id: "2",
    title: "Going Karachi",
    body: "Raja Jazib Siddique sit amet consectetur adipisicing elit. Nemo suscipit saepe obcaecati voluptate ullam esse molestias. Dolorum tempora itaque dolores nihil tempore! Quas libero maiores explicabo ipsum fugit officia suscipit quo laborum facere nam.",
    reactions: 4,
    userId: "user-2",
    tags: ["Amazing", "Life", "Love"],
  },
];
export default PostListProvider;
