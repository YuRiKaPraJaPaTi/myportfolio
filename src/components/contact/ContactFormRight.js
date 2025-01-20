import React from 'react'
import { useState } from "react";
import emailjs from "emailjs-com";


const ContactFormRight = () => {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});


  const handleChange =(e)=>{
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear errors for the current field
  };

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Form is valid if no errors
  };

  // Handle form submission
  const handleSend = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // EmailJS integration
      emailjs
        .send(
          "service_u9q9u9m", // Replace with your EmailJS Service ID
          "template_qgop5gg", // Replace with your EmailJS Template ID
          formData,
          "yd4qqeJZvSvxhX95_" // Replace with your EmailJS User ID (or Public Key)
        )
        .then(
          (result) => {
            alert("Message sent successfully!");
            setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
            setErrors({});
          },
          (error) => {
            console.error(error.text);
            alert("Failed to send message. Please try again later.");
          }
        );
    }
  };

  return (
    <div className='w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-8 rounded-lg shadow-ShadowOne'>
            <form className='w-full flex flex-col gap-6' onSubmit={handleSend}>
              <div className='w-full  flex gap-4 '>
                <div className='w-1/2 flex flex-col gap-4'>
                  <p className='text-sm text-gray-400 uppercase tracking-wie '>Your Name</p>
                  <input className="contactInput" 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}/>
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>
                <div className='w-1/2 flex flex-col gap-4'>
                  <p className='text-sm text-gray-400 uppercase tracking-wie '>Phone</p>
                  <input className="contactInput" 
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange} />
                      {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                </div>
              </div>

              <div className='w-full  flex flex-col gap-4 '>
              <p className='text-sm text-gray-400 uppercase tracking-wie '>Email</p>
              <input className="contactInput" 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}/>
              </div>

              <div className='w-full  flex flex-col gap-4 '>
              <p className='text-sm text-gray-400 uppercase tracking-wie '>Subject</p>
              <input className="contactInput" 
                    type="text" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}/>
              </div>

              <div className='w-full  flex flex-col gap-4 '>
              <p className='text-sm text-gray-400 uppercase tracking-wie '>Message</p>
              <textarea className='contactTextArea' cols='30' rows='8'
                        name="message"
                        value={formData.message}
                        onChange={handleChange}></textarea>
                    {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>
              <div className='w-full'>
                <button type='submit'
                className='w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent'>
                  Send MEssage
                </button>
              </div>
            </form>


          </div>
  )
}

export default ContactFormRight