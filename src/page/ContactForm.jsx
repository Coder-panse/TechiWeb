import React, { useState } from 'react';
import axios from "axios"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName:"",
    contactNo:"",
    organization: '',
    email: '',
    description: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async() => {
    if (formData.fullName && formData.contactNo && formData.organization && formData.email && formData.description) {
      
      const response=await axios.post("http://localhost:8000/mail",formData)
      
      
      setShowSuccess(true);
      setFormData({
        fullName:'',
        contactNo:'',
        organization: '',
        email: '',
        description: ''
      });

      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-20 lg:pb-24 bg-neutral-950 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-white/10 shadow-2xl">
        <div className="mb-8 md:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-2 md:mb-3">Get In Touch</h1>
          <p className="text-sm sm:text-base text-neutral-400">
            We'd love to hear from you. Fill out the form below and we'll get back to you soon.
          </p>
        </div>

        <div className="space-y-5 md:space-y-7">
          <div>
            <label htmlFor="organization" className="block text-xs sm:text-sm font-medium text-neutral-200 mb-1.5 md:mb-2">
              FullName *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your organization name"
              className="w-full px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
            />
          </div>

          <div>
            <label htmlFor="organization" className="block text-xs sm:text-sm font-medium text-neutral-200 mb-1.5 md:mb-2">
              Contact No. *
            </label>
            <input
              type="text"
              id="contactNo"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              placeholder="Enter your organization name"
              className="w-full px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
            />
          </div>


          <div>
            <label htmlFor="organization" className="block text-xs sm:text-sm font-medium text-neutral-200 mb-1.5 md:mb-2">
              Organization Name *
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              placeholder="Enter your organization name"
              className="w-full px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-neutral-200 mb-1.5 md:mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              className="w-full px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-xs sm:text-sm font-medium text-neutral-200 mb-1.5 md:mb-2">
              Project Description *
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Tell us about your project or how we can help you..."
              rows="4"
              className="w-full px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all resize-y min-h-[100px] sm:min-h-[120px]"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full py-3 sm:py-4 text-sm sm:text-base bg-white text-black font-semibold rounded-lg sm:rounded-xl transition-all hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            Send Message
          </button>
        </div>

        {showSuccess && (
          <div className="mt-5 md:mt-6 p-3 sm:p-4 text-sm sm:text-base bg-green-500/10 border border-green-500/30 rounded-lg sm:rounded-xl text-green-400 text-center">
            ✓ Thank you! Your message has been sent successfully.
          </div>
        )}
      </div>
    </div>
  );
}