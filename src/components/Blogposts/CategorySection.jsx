import React from "react";
import blogPosts from "./blogPosts.json";
import arrowRightIcon from "../../assets/arrow-right-icon.svg";
import { Card } from "./Card";

export const CategorySection = ({ id = "view-all" }) => {
  const getRandomSort = () => {
    return Math.random() - 0.5;
  };

  const filteredPosts =
    id !== "view-all"
      ? blogPosts.filter((post) => post.categoryId === id)
      : blogPosts.sort(getRandomSort);

  let featuredPost;

  const posts = filteredPosts.reduce((acc, post) => {
    if (post.featured && !featuredPost) {
      featuredPost = post;
      return acc;
    }
    return [...acc, post];
  }, []);

  return (
    <div className="flex flex-col gap-16">
      {featuredPost && (
        <div className="flex flex-col gap-6 w-featuredBlogPost">
          <img
            src={require(`../../assets/${featuredPost.image}`)}
            alt="BlogPost"
            className="rounded-lg w-full"
          />
          <div className="flex flex-col gap-6 items-start">
            <div className="flex flex-row gap-4">
              <div className="flex bg-washed-purple px-3 py-1 rounded-full font-sans text-sm font-medium leading-7 text-dark-purple text-start">
                {featuredPost.categoryLabel}
              </div>
              <div className="flex items-center font-sans text-sm font-semibold leading-7 text-dark-purple text-start">{`${featuredPost.readingDuration} min read`}</div>
            </div>
            <div className="flex flex-col gap-2.5">
              <div className="font-sans text-3xl font-semibold leading-7 text-dark-purple text-start tracking-wide">
                {featuredPost.title}
              </div>
              <div className="flex items-center font-sans text-base font-normal leading-7 text-dark-purple text-center">
                {featuredPost.description}
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <button className="font-sans text-base font-medium leading-7 text-dark-purple text-start">
                Read more
              </button>
              <img className="flex" src={arrowRightIcon} alt="Arrow right" />
            </div>
          </div>
        </div>
      )}
      <div className="grid grid-cols-2 gap-8">
        {posts.map((post) => (
          <Card post={post} />
        ))}
      </div>
    </div>
  );
};
