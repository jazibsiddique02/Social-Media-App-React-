import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};
  const deletePost = (postId) => {
   
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
