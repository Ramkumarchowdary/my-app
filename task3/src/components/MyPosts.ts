import React from "react";
import { useGetPostsQuery } from "../api/apiSlice";

const MyPostList: React.FC = () => {
  const { data: posts = [], isLoading, isError } = useGetPostsQuery();

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error fetching posts.</div>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title ? post.title : "No Title"}</h3>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyPostList;
