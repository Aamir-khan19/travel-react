import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import animatedLoader from "/Images/animated_images/delete_loader.svg";
import { blogContentImagesIndexAsync } from "../../features/blog/blogSlice";
import conf from "../../../conf/conf";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DashboardBlogContentImagesModal({setIsBlogContentImagesModalOpen}){

  const dispatch = useDispatch();
  const blogContentImages = useSelector((state) => state.blogs.blogContentImages);
  const isLoading = useSelector((state) => state.blogs.isLoading);

  useEffect(() => {
    if (blogContentImages?.length === 0) {
      dispatch(blogContentImagesIndexAsync());
    }
  }, []);

  const handleBlogContentImagesModal = () => {
    setIsBlogContentImagesModalOpen(false);
  };


  const handleCopyBlogContentImageCode = (imageSrc) => {
    navigator.clipboard.writeText(`<img src="${conf.laravelBaseUrl}/${imageSrc}" alt="Blog Content Image" />`);


       toast.success("Image Code Copied Successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          pauseOnHover: true,
        });
  }

  return (
    <div>

        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2 overflow-y-auto max-h-[90vh]">
            <div className="p-4 border-b flex justify-between items-center">
              <h2 className="text-xl font-semibold">Blog Content Images</h2>
              <button
                onClick={handleBlogContentImagesModal}
                className="text-red-500 hover:text-red-700"
              >
                Close
              </button>
            </div>

            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <div className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-gray-600 border-r-transparent"></div>
              </div>
            ) : (
              <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {blogContentImages?.map((imageGroup) => (
                  <div
                    key={imageGroup?.id}
                    className="border rounded-lg p-4 shadow-sm"
                  >
                    <h3 className="font-bold text-lg mb-2">{imageGroup?.title}</h3>


                    <div className="space-y-2">
  {imageGroup?.images?.map((imageSrc, index) => {
    // Ensure blog_content_images_used_in exists and has an entry for the current index
    const imageUsedIn = imageGroup?.blog_content_images_used_in?.[index];
    const usedIn = imageUsedIn?.used_in?.join(', ') || 'Not used'; // Fallback to 'Not used' if not available

    return (
      <div 
        onClick={() => handleCopyBlogContentImageCode(imageSrc)} 
        key={index} 
        className="text-sm bg-blue-100 rounded py-2 px-2 cursor-pointer hover:bg-blue-200"
      >
        <img
          src={`${conf?.laravelBaseUrl}/${imageSrc}`}
          alt={imageGroup?.title}
          className="w-full h-32 object-cover rounded-md mb-2"
        />
        <p className="text-gray-600 line-clamp-3 text-sm">
          Used In: {usedIn}
        </p>
      </div>
    );
  })}
</div>



                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      


      <ToastContainer />
    </div>
  );
}

export default DashboardBlogContentImagesModal;
