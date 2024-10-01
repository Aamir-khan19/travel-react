import React, { useEffect, useState } from "react";
import { blogPosts } from "../../components/blogs/blogPostsData";
import { useParams } from "react-router-dom";
import Navbar from "../../components/global/Navbar";
import Footer from "../../components/global/Footer";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const blog = blogPosts.find((obj) => obj.id == id);
    setBlog(blog);
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className="max-w-6xl mx-auto p-6 sm:p-12 bg-white shadow-lg rounded-lg mt-8 transition-all duration-300 hover:shadow-2xl">
        {blog?.image && (
          <div className="relative overflow-hidden rounded-lg shadow-lg mb-8">
            <img
              src={blog?.image}
              alt={blog?.title}
              className="w-full h-[500px] object-cover rounded-lg hover:scale-105 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        )}

        {/* Blog Title & Info */}
        <div className="space-y-6 text-center">
          <h1 className="text-4xl font-bold text-gray-800 hover:text-indigo-900 transition-colors duration-300">
            {blog?.title}
          </h1>
          <div className="text-gray-600 flex justify-between items-center space-x-4 text-sm font-medium">
            <span className="bg-indigo-100 text-indigo-900 py-1 px-4 rounded-full">
              {blog?.category}
            </span>
            <div className="flex items-center space-x-2">
              <span className="text-gray-500">
                By{" "}
                <span className="font-semibold text-gray-800">
                  {blog?.author}
                </span>
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-500">{blog?.date}</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 my-10"></div>

        <div className="mt-8 space-y-16">
          {blog?.content?.map((elem, index) => (
            <div key={index} className="space-y-6">
              <h2 className="text-3xl font-semibold text-indigo-800 hover:text-indigo-900 transition-colors duration-300">
                {elem?.heading}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed tracking-wide">
                {elem?.text}
              </p>
              {elem?.imageSrc && (
                <img
                  src={elem?.imageSrc}
                  alt={elem?.heading}
                  className="w-full h-[450px] object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              )}
            </div>
          ))}
        </div>

        {/* Author Bio */}
        <div className="border-t border-gray-300 my-10"></div>
        <div className="flex items-center space-x-4">
          {/* Replace img with your author's image */}
          {/* <img
          src={`https://i.pravatar.cc/150?u=${blog?.author}`}
          alt={blog?.author}
          className="w-16 h-16 rounded-full border border-gray-300"
        /> */}
          <div>
            <p className="text-gray-700 font-semibold">
              Written by {blog?.author}
            </p>
            <p className="text-sm text-gray-500">
              {blog?.author} is a travel enthusiast who loves exploring new
              cultures and places.
            </p>
          </div>
        </div>

        {/* Share Buttons */}
        <div className="flex justify-between items-center mt-10">
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-500 hover:text-indigo-900 transition-colors"
            >
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-indigo-900 transition-colors"
            >
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-indigo-900 transition-colors"
            >
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </div>
          <div className="flex space-x-4">
            <a
              href="/blogs"
              className="px-6 py-3 bg-indigo-900 text-white font-semibold rounded-full shadow hover:bg-indigo-700 transition-colors duration-300"
            >
              Back to Blogs
            </a>
            <a
              href="/contact"
              className="px-6 py-3 bg-indigo-900 text-white font-semibold rounded-full shadow hover:bg-indigo-700 transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Related Posts */}
        <div className="mt-20">
          <h3 className="text-3xl font-semibold text-gray-800 mb-8">
            Related Posts
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <div
                key={post.id}
                className="bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-500 ease-in-out"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover rounded-md mb-4"
                />
                <h4 className="text-xl font-semibold mb-2 text-gray-800">
                  {post.title}
                </h4>
                <a
                  href={`/blogdetail/${post?.id}`}
                  className="text-indigo-900 font-semibold hover:underline"
                >
                  Read more
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetail;
