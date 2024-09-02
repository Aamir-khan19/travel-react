import React from "react";
import Blog from "./Blog";
import { Link } from "react-router-dom";
import { blogPosts } from "./blogPostsData";
const Blogs = () => {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto py-10 px-5">
        <div className="relative w-full">
          <div className="relative">
            <img
              src="https://cdn.pixabay.com/photo/2019/12/14/19/37/autumn-4695599_640.jpg"
              alt=""
              className="flex items-center justify-center w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50"></div>
          </div>
          <div className="absolute flex justify-center top-5 left-5 h-full flex-col space-y-4 max-w-2xl">
            <h1 className="text-white font-bold text-3xl sm:text-6xl">
              All Available Blogs are here
            </h1>
            <p className="text-white text-xl">
              Discover our collection of insightful articles and stories.
            </p>
            <button className="bg-white text-black font-bold py-2 px-4 rounded-lg w-max">
              Explore Blogs
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-10 md:py-20 py-10">
          <h2 className=" text-[#01055b] md:text-5xl text-3xl font-bold mb-4 sm:mb-0">
            Latest Posts
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="flex cursor-pointer border border-gray-300 p-4 rounded-lg flex-col gap-5 relative group"
              >
                <img
                  src={post.image}
                  alt=""
                  className="object-cover h-64 rounded-lg"
                />
                <div className="flex gap-3 items-center">
                  <div className="bg-blue-200 px-2 py-1 rounded-lg w-fit">
                    <p>{post.category}</p>
                  </div>
                  <div className="bg-blue-200 px-2 py-1 rounded-lg w-fit">
                    <p>Read More</p>
                  </div>
                </div>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-medium">
                  {post.title}
                </h1>
                <div className="flex items-center justify-between gap-2">
                  <img
                    src={post.authorImage}
                    className="object-cover rounded-full w-8 h-8"
                    alt=""
                  />
                  <p>{post.author}</p>
                  <p>{post.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;