import React from "react";
import Blogs from "../components/blogs/Blogs";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";

const BlogsPage = () => {
  return (
    <>
      <Navbar />

      <Blogs />

      <Footer />
    </>
  );
};

export default BlogsPage;