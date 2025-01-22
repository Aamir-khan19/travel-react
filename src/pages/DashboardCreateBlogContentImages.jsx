import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  blogContentImagesStoreAsync,
  setIsBlogContentImagesCreated,
} from "../features/blog/blogSlice";
import DashboardSideBar from "../components/dashboard/DashboardSideBar";
import DashboardContentContainer from "../components/dashboard/DashboardContentContainer";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DashboardCreateBlogContentImages() {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.blogs.isLoading);
  const isBlogContentImagesCreated = useSelector(
    (state) => state.blogs.isBlogContentImagesCreated
  );
  const apiErrors = useSelector((state) => state.blogs.errors);

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [images, setImages] = useState([]);
  const [imagesReqErr, setImagesReqErr] = useState("");
  

  const handleImageSelect = (event) => {
    const files = Array.from(event.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
     if(images.length == 0){
        toast.error("Please Select Blog Content Images", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          pauseOnHover: true,
        });
    
        return;
      }

    dispatch(blogContentImagesStoreAsync({images_files: images, title: title}));
  };

  useEffect(() => {
    if (isBlogContentImagesCreated) {
      dispatch(setIsBlogContentImagesCreated());
      navigate("/dashboard-blog-content-images");
    }
  }, [isBlogContentImagesCreated]);

  return (
    <>
      <DashboardSideBar />
      <DashboardContentContainer>
        {isLoading ? (
          <div className="flex justify-center h-[50vh] items-center">
            <div className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-r-transparent border-gray-600"></div>
          </div>
        ) : (
          <form
            className="bg-gray-100 p-6 rounded-lg shadow-md max-w-3xl"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <h2 className="text-2xl font-semibold text-purple-700 mb-4">
              Upload Blog Content Images
            </h2>

            {/* Title Field */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Blog Content Images Title
              </label>
              <input
                type="text"
                placeholder="Enter Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-700"
              />
              <p className="text-sm text-red-500">
                {apiErrors?.errors?.title && apiErrors.errors.title[0]}
              </p>
            </div>

    
             {/* Images Grid */}
             {
              images?.length > 0 && (
<div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Selected Images
              </label>
              <div className="grid grid-cols-3 gap-4">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="relative border border-gray-300 rounded overflow-hidden"
                  >
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Selected ${index}`}
                      className="object-cover w-full h-32"
                    />
                    <button
                        type="button"
                      onClick={() => handleRemoveImage(index)}
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1 m-1 hover:bg-red-600"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
               )
            }

            {/* Select Images Button */}
            <div className="mb-4">
              <label className="inline-block px-4 py-2 text-white bg-blue-500 rounded cursor-pointer hover:bg-blue-600">
                Select Images
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageSelect}
                  className="hidden"
                />
              </label>
            </div>

            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => navigate("/dashboard-blog-content-images")}
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
              >
                Cancel
              </button>
            </div>
          </form>
        )}


         <ToastContainer />
      </DashboardContentContainer>
    </>
  );
}

export default DashboardCreateBlogContentImages;
