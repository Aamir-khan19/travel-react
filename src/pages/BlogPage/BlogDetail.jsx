import React, { useEffect, useState } from 'react'
import { blogPosts } from '../../components/blogs/blogPostsData'
import { useParams } from 'react-router-dom'
const BlogDetail = () => {
    const {id}=useParams();

    const [blog, setBlog] = useState({});

    console.log("id",id, "blogpostsdat", blogPosts);


    useEffect(()=>{
    const blog = blogPosts.find((obj)=> obj.id == id);

    console.log("blog", blog);
    setBlog(blog);

    }, [])

  return (
    <div>
    <img src={blog?.image} alt="" />

    <h1>{blog?.title}</h1>

    <h2>{blog?.category}</h2>

    
    </div>
  )
}

export default BlogDetail