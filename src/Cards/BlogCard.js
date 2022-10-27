import React from "react";

const BlogCard = ({ blog }) => {
  const { blogName, blogDescription } = blog;
  return (
    <div className="card w-64 md:w-96 lg:w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10"></figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{blogName}</h2>
        <p className="text-justify">{blogDescription}</p>
      </div>
    </div>
  );
};

export default BlogCard;
