import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useNavigate, useParams} from "react-router-dom";
import { blogCategoriesIndexAsync, blogsIndexAsync, blogsUpdateAsync, setBlog, setIsBlogUpdated } from '../features/blog/blogSlice';
import InputField from '../components/dashboard_create_blog/InputField';
import TextAreaField from '../components/dashboard_create_blog/TextAreaField';
import FileUploadField from '../components/dashboard_create_blog/FileUploadField';
import SelectField from '../components/dashboard_create_blog/SelectField';
import DashboardSideBar from "../components/dashboard/DashboardSideBar";
import DashboardContentContainer from "../components/dashboard/DashboardContentContainer";
import ReactQuill from 'react-quill';
import DashboardBlogContentImagesModal from '../components/dashboard_create_blog/DashboardBlogContentImagesModal';

function DashboardEditBlog() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();

    const blogs = useSelector(state => state.blogs.blogs);
    const blog = useSelector(state => state.blogs.blog);
    const isLoading = useSelector(state => state.blogs.isLoading);
    const isBlogUpdated  = useSelector(state => state.blogs.isBlogUpdated);
     const apiErrors = useSelector(state => state.blogs.errors);

     const blogCategories = useSelector(state => state.blogs.blogCategories);

    const [blogImageFile, setBlogImageFile] = useState({});
    const [blogImageUrl, setBlogImageUrl] = useState(null);

    const [formData, setFormData] = useState({
        blog_title: '',
        blog_slug: '',
        blog_keywords: '',
        blog_description: '',
        blog_author_name: '',
        blog_category: '',
        blog_meta_title: '',
        blog_visibility: 'public',
        "_method": "PUT"
    });

    const [blogContent, setBlogContent] = useState("");

    const [visibleBlogSlug, setVisibleBlogSlug] = useState("");

    const [isBlogContentImagesModalOpen, setIsBlogContentImagesModalOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        if(e.target.files.length > 0){
            setBlogImageFile(e.target.files[0]);
          setBlogImageUrl(URL.createObjectURL(e.target.files[0]));
      
           }else{
            setBlogImageFile({});
            setBlogImageUrl(null);
           }

    };

    const handleSubmit = (e) => {
        e.preventDefault();
       
        if(blogImageFile?.name){
            formData.blogImageFile = blogImageFile;
        }

        if(blogContent){
            formData.blog_content = blogContent;
        }

        dispatch(blogsUpdateAsync({...formData, id: id }));
    };


    useEffect(()=>{
    if(isBlogUpdated){
        dispatch(setIsBlogUpdated());
        navigate("/dashboard-blogs");
    }
    }, [isBlogUpdated])



    useEffect(()=>{
    if(blogs?.length == 0){
        dispatch(blogsIndexAsync())
        .then(()=>{
            dispatch(setBlog(id));
        })
    }
    else{
        dispatch(setBlog(id));
    }
    }, [id])


    useEffect(()=>{
    setFormData({...formData, 
        blog_title: blog?.blog_title || '',
        blog_slug: blog?.blog_slug || '',
        blog_keywords: blog?.blog_keywords || '',
        blog_description: blog?.blog_description || '',
        blog_author_name: blog?.blog_author_name || '',
        blog_category: blog?.blog_category || '',
        blog_meta_title: blog?.blog_meta_title || '',
        blog_visibility: blog?.blog_visibility || 'public'});

        setBlogContent(blog?.blog_content);
        setVisibleBlogSlug(blog?.blog_slug);
    }, [blog])



    const modules = {
        toolbar: [
          // Formatting Options
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ font: [] }],
          [{ size: ["small", false, "large", "huge"] }],
    
          // Text Alignment
          [{ align: [] }],
    
          // Text Styling
          ["bold", "italic", "underline", "strike"],
    
          // List Options
          [{ list: "ordered" }, { list: "bullet" }],
          [{ indent: "-1" }, { indent: "+1" }],
    
          // Scripts
          [{ script: "sub" }, { script: "super" }],
    
          // Blockquote, Code Block
          ["blockquote", "code-block"],
    
          // Links, Images, Videos
          ["link", "image", "video"],
    
          // Color Options
          [{ color: [] }, { background: [] }],
    
          // Clear Formatting
          ["clean"],
        ],
      };
    
      const formats = [
        "header",
        "font",
        "size",
        "align",
        "bold",
        "italic",
        "underline",
        "strike",
        "list",
        "bullet",
        "indent",
        "script",
        "blockquote",
        "code-block",
        "link",
        "image",
        "video",
        "color",
        "background",
      ];

      useEffect(()=>{
      if(blogCategories?.length == 0){
          dispatch(blogCategoriesIndexAsync());
      }
      }, []);


      const handleVisibleBlogSlug = function (e) {
        setVisibleBlogSlug(e.target.value);

        const slug = e.target.value.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '');
        setFormData({ ...formData, blog_slug: slug });
    }


    const handleBlogContentImagesModal = function(){
        setIsBlogContentImagesModalOpen(true);
        }

  return (
    <>
    <DashboardSideBar />


    <DashboardContentContainer>

{
isLoading? 
<div className=' flex justify-center h-[50vh] items-center'>

<div className='inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent border-gray-600 align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'></div> 

</div>

:

<form 
className="bg-gray-100 p-6 rounded-lg shadow-md max-w-3xl mx-auto md:mx-0" 
onSubmit={handleSubmit}
>
<h2 className="text-2xl font-semibold text-purple-700 mb-4">Edit Blog</h2>

<InputField
    label="Blog Title"
    name="blog_title"
    value={formData.blog_title}
    onChange={handleChange}
/>
<p className=' mb-8 text-sm text-red-500'>{apiErrors?.errors?.blog_title && apiErrors?.errors?.blog_title[0]}</p>

<div className="mb-4">
<label className="block text-sm font-medium text-gray-700 mb-1">
Blog Slug
</label>

<input
type="text"
value={visibleBlogSlug}
onChange={handleVisibleBlogSlug}
className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-700"
/>

{
formData?.blog_slug && <p className=' bg-white rounded px-2 py-1'>{formData?.blog_slug}</p>
} 
</div>
<p className=' mb-8 text-red-500 text-sm'>{apiErrors?.errors?.blog_slug && apiErrors?.errors?.blog_slug[0]}</p>


<FileUploadField
    label="Blog Image"
    name="blog_image_file"
    onChange={handleFileChange}
/>
<p className=' mb-8 text-red-500 text-sm'>{apiErrors?.errors?.blog_image_file && apiErrors?.errors?.blog_image_file[0]}</p>

<InputField
    label="Blog Keywords"
    name="blog_keywords"
    value={formData.blog_keywords}
    onChange={handleChange}
/>
<p className=' mb-8 text-red-500 text-sm'>{apiErrors?.errors?.blog_keywords && apiErrors?.errors?.blog_keywords[0]}</p>

<TextAreaField
    label="Blog Description"
    name="blog_description"
    value={formData.blog_description}
    onChange={handleChange}
/>
<p className=' mb-8 text-red-500 text-sm'>{apiErrors?.errors?.blog_description && apiErrors?.errors?.blog_description[0]}</p>

<InputField
    label="Blog Author Name"
    name="blog_author_name"
    value={formData.blog_author_name}
    onChange={handleChange}
/>
<p className=' mb-8 text-red-500 text-sm'>{apiErrors?.errors?.blog_author_name && apiErrors?.errors?.blog_author_name[0]}</p>

<div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
            Blog Category
        </label>

        <select name="blog_category" value={formData?.blog_category} onChange={handleChange} className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-700">
        <option value="" disabled>Select Blog Category</option>
        {blogCategories?.map((category, index) => (
            <option key={index} value={category.category_name}>{category.category_name}</option>
        ))}
        </select>
    </div>
<p className=' mb-8 text-red-500 text-sm'>{apiErrors?.errors?.blog_category && apiErrors?.errors?.blog_category[0]}</p>

<InputField
    label="Blog Meta Title"
    name="blog_meta_title"
    value={formData.blog_meta_title}
    onChange={handleChange}
/>
<p className=' mb-8 text-red-500 text-sm'>{apiErrors?.errors?.blog_meta_title && apiErrors?.errors?.blog_meta_title[0]}</p>

<SelectField
    label="Blog Visibility"
    name="blog_visibility"
    value={formData.blog_visibility}
    onChange={handleChange}
    options={['public', 'private']}
/>
<p className=' mb-8 text-red-500 text-sm'>{apiErrors?.errors?.blog_visibility && apiErrors?.errors?.blog_visibility[0]}</p>


<div className="py-4 mb-10">
<label className="block text-sm font-medium text-gray-700 mb-1">
            Blog Content
        </label>

        <button onClick={handleBlogContentImagesModal} type='button' className=' bg-indigo-400 text-white rounded px-4 py-1 my-2'>Select Blog Content Images</button>

<ReactQuill
   theme="snow"
   value={blogContent}
        onChange={(value)=> setBlogContent(value)}
        placeholder="Blog Content"
        modules={modules}
        formats={formats}
        className="h-[100vh] text-gray-700 bg-white"
/>
<p className='mb-8 text-red-500 text-sm'>{apiErrors?.errors?.blog_content && apiErrors?.errors?.blog_content[0]}</p>

</div>



<div className=" flex justify-between">
<button
    type="submit"
    className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition"
>
    Submit
</button>


<Link 
className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-purple-800 transition"
to="/dashboard-blogs">Cancel</Link>

</div>




</form>

}
    
{
isBlogContentImagesModalOpen && <DashboardBlogContentImagesModal setIsBlogContentImagesModalOpen={setIsBlogContentImagesModalOpen} isBlogContentImagesModalOpen={isBlogContentImagesModalOpen} />
}

</DashboardContentContainer>
</>
  )
}

export default DashboardEditBlog;