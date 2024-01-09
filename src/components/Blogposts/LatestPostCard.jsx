import React from "react";
import arrowRightIcon from "../../assets/arrow-right-icon.svg";

export const LatestPostCard = ({ post }) => {
  return (
    <div className="w-blogPostCard">
      <div className="flex flex-row gap-6">
        <img
          src={require(`../../assets/${post.image}`)}
          alt="BlogPost"
          className="rounded-lg w-full h-full object-contain"
        />
        <div className="flex flex-col gap-6 items-start">
          <div className="flex flex-row gap-4">
            <div className="flex bg-washed-purple px-3 py-1 rounded-full font-sans text-sm font-medium leading-7 text-dark-purple">
              {post.categoryLabel}
            </div>
            <div className="flex items-center font-sans text-sm font-semibold leading-7 text-dark-purple">{`${post.readingDuration} min read`}</div>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="font-sans text-3xl font-semibold leading-7 text-dark-purple text-start tracking-wide">
              {post.title}
            </div>
            <div className="flex font-sans text-base font-normal leading-7 text-dark-purple text-start">
              {post.description}
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
    </div>
  );
};
