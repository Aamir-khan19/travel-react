import React from "react";
import Blogs from "../components/blogs/Blogs";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";

const BlogsPage = () => {
  return (
    <>
      <Navbar />

    <div className=" h-screen font-semibold text-5xl text-center">
      blog page
    </div>

      {/* <Blogs /> */}

      <Footer />
    </>
  );
};

export default BlogsPage;