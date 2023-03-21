
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Layout from "@/components/layout";


const MessageApi= `https://localhost:7014/api/MessageApi`;


export function Contact(){

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        msg: '',
      });

      const [status, setStatus] = useState(null);

      // handle the form sumbit 
      const handleSubmit = async (event) => {
        event.preventDefault();
      
        try {
          // post message with axios 
          const response = await axios.post(MessageApi, formData);
          console.log('Message sent successfully:', response.data);
          //  if message was sent successfully then set status to 'success'
          setStatus('success'); 

        } catch (error) {
          console.error('Error sending message:', error);
           // 'error' if there was an error when sending message
          setStatus('error');

        }
      };
    
      // handle any changes in the form input fields.
      const handleChange = (event) => {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [event.target.name]: event.target.value,
        }));
      };

    return (
        <>
        <Layout>
        <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-4xl dark:text-white">
          Contact 
        </h1>

        <div className="text-center">
          <p className="text-lg">We are a here to help.</p>
        </div>

        <div className=" p-10 mx-auto grid my-10 md:grid-cols-2">
          <div className="my-5">
            <h2 className="text-2xl font-semibold dark:text-white">
              Contact Digital View
            </h2>
            <p className="max-w-sm mt-5">
              Have something to say? We are here to help. Fill up the
              form or send email or call phone.
            </p>

            <div className="mt-5">
              <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
                <span> Köpenhamnsvägen 6B, 22649 Lund </span>
              </div>
          
                <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
                  <a href="tel:0720123456">
                  072-012 34 56
                  </a>
                </div>
                <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
                  <a href="mailto:info@digitalview.se">
                  info@digitalview.se
                  </a>
                </div>
            </div>
          </div>
        
        <div>
      
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input                        
                 className="mb-5 w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4"
                type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                  className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900   focus:ring-4"
                  type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="mt-5" >
                <label htmlFor="msg">Message:</label>
                <textarea
                 className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white dark:placeholder:text-gray-200 dark:bg-gray-900   rounded-md outline-none  h-36 focus:ring-4"
                id="msg" name="msg" value={formData.msg} onChange={handleChange}></textarea>
            </div>
            <button type="submit"
            className="w-full py-4 font-semibold text-white transition-colors bg-pink-600 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring focus:ring-gray-200 px-7 dark:bg-white dark:text-black "
            >
            Send Message</button>
            {/* Show message based on status if messages sent or not */}
            {status === 'success' && <p className="w-full text-center py-4 mt-8 font-semibold text-white transition-colors bg-green-500 rounded-md">Message sent successfully!</p>}
            {status === 'error' && <p className="w-full text-center py-4 mt-8 font-semibold text-white transition-colors bg-red-500 rounded-md">Error! Please try again later.</p>}
            </form>
            </div>
        </div>
        </Layout>
        </>
    );
}

export default Contact;
