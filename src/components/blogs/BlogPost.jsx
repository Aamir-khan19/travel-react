import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "./blogPostsData";
import Navbar from "../global/Navbar";
import Footer from "../global/Footer";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <div>Blog post not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto flex flex-col gap-5 py-10 px-5">
        <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover mb-4"
        />
        <div className="flex flex-col w-full gap-1">
          <div className="flex w-full items-center justify-between">
            <p className="text-2xl">
              Category:
              <span className="text-3xl font-bold">{post.category}</span>
            </p>
            <p className="">Author: {post.author}</p>
          </div>
          <p className="">Date: {post.date}</p>
        </div>
        {post.content.map((con, i) => (
          <div className="flex flex-col w-full gap-1">
            <div className="flex w-full items-center justify-between">
              <p className="text-2xl">{con.heading}</p>
            </div>
            <p>{con.text}</p>
            <img className="w-4/5 " src={con.imageSrc} alt="" />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;