import React from "react";
import blogPosts from "./blogPosts.json";

export const CategorySection = ({ id }) => {
  console.log(id);
  console.log(blogPosts);

  const filteredPosts = id
    ? blogPosts.filter((post) => post.categoryId === id)
    : blogPosts;

  console.log(filteredPosts);
  return (
    <div>
      <div></div>
      <div>
        {filteredPosts.map((post) => (
          <div>{post.title}</div>
        ))}
      </div>
    </div>
  );
};
