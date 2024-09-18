import React, { useEffect, useState } from 'react';
import api from '../../api';

const RequestQuoteModal = ({isRequestQuoteModalOpen, handleRequestQuoteCloseModal}) => {
 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    message: ""
  });

  const [flashMessage, setFlashMessage] = useState("");
  
const handleFormSubmit = (e)=>{
e.preventDefault();

console.log("e.preventDefault", e)

const registerBody = {
  name: formData.name,
  email: formData.email,
  phone: formData.phone,
  destination: formData.destination,
  message: formData.message
}

console.log("regsiterBosy REqesutQouteModal.jsx", registerBody);

api.postReq("quote", registerBody)
.then((data)=>{
console.log("request a quote successfully got", data)

setFlashMessage("Form submitted successfully you will be contacted soon");
console.log("successfully refgsitered eith us", data);

setFormData({ name: "", email: "", phone: "", message: "", destination: "" });
})
.catch((error)=>{
console.log("ReqesutQhuoteModel.jsx", error);
})
}



useEffect(()=>{
  if(flashMessage){
    setTimeout(()=>{
    setFlashMessage("");
    }, 5000)
  }
  }, [flashMessage]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>

      {isRequestQuoteModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-2 rounded-lg shadow-lg w-[400px] max-[600]:w-[320px] max-[400px]:w-[280px] relative px-4 pb-4">
            <button 
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-4xl -m-2" 
              onClick={handleRequestQuoteCloseModal}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-2 text-center">Request a Quote</h2>

            <div className={ `bg-white rounded ${flashMessage? "block" : "hidden"}`}>
         <h1 className=" text-center text-green-500 font-bold text-sm">{flashMessage}</h1>
         </div>

            <form className="space-y-4" onSubmit={(e)=>handleFormSubmit(e)}>
              <input 
                type="text" 
                placeholder="Name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                
              />
              <input 
                type="email" 
                placeholder="Email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input 
                type="tel" 
                placeholder="Phone" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input 
                type="text" 
                placeholder="Destination" 
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                required 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea 
                placeholder="Message" 
                rows="4" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required 
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button 
                type="submit" 
                className="w-full p-3 text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg hover:opacity-90 transition">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default RequestQuoteModal;
