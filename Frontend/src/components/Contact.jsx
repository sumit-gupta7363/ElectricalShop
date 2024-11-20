import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function Contact() {
  // Using react-hook-form for managing form data
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Function to handle form submission
  const onSubmit = (data) => {
    console.log(data); // You can replace this with an API call or some other action
    alert("Form submitted successfully!");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-md modal-box">
        <h3 className="text-xl font-semibold text-center mb-4 ">Contact Us</h3>

        <form method='dialog' onSubmit={handleSubmit(onSubmit)} className="space-y-4">

           {/* if there is a button in form, it will close the modal */}
           <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700"><div className=""></div>
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your full name"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your email address"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register('email', { 
                required: 'Email is required', 
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Please enter a valid email address',
                }
              })}
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your message"
              rows="4"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register('message', { required: 'Message is required' })}
            />
            {errors.message && <p className="text-red-500 text-xs">{errors.message.message}</p>}
          </div>

          {/* Submit Button */}
          <div className="mt-4 text-center">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
