import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [userInfo, setuserInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    jobRole: "",
  });

  const [resume, setResume] = useState(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    setuserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsSubmitting(true);
      const formData = new FormData()
      formData.append("fullName",userInfo.fullName)
      formData.append("email",userInfo.email)
      formData.append("phone",userInfo.phone)
      formData.append("jobRole",userInfo.jobRole)
      formData.append("resume", resume); 

      console.log([...formData.entries()])
      const response = await axios.post(
        "https://techiweb-backend.onrender.com/apply",
        formData,{
      headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if(response){
        setuserInfo({
          fullName:"",
          email:"",
          phone:"",
          jobRole:"",
        })
        setResume(null)
        setIsSubmitting(false)
        toast.success("Application submitted successfully!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong, please try again!");
    }
  };

  return (
    <div className="bg-gray-900 z-0">
      {/* Background Pattern */}

      <div className="relative z-0 container mx-auto px-4 py-36">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent mb-6 drop-shadow-lg">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Ready to take the next step in your career? Apply for a position
            with us and let's build something amazing together.
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl shadow-black/50">
            <form action="" encType="multipart/form-data" className="space-y-8">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={userInfo.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-white placeholder-gray-300 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={userInfo.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-white placeholder-gray-300 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={userInfo.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-white placeholder-gray-300 transition-all duration-300"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Desired Job Role *
                  </label>
                  <input
                    type="text"
                    name="jobRole"
                    value={userInfo.jobRole}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-white placeholder-gray-300 transition-all duration-300"
                    placeholder="e.g., Frontend Developer, UX Designer"
                  />
                </div>
              </div>

              {/* Resume Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Resume/CV *
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    required
                    className="hidden"
                  />
                  <label
                    htmlFor="resume"
                    className="flex items-center justify-center w-full px-4 py-6 bg-white/10 backdrop-blur-sm border-2 border-dashed border-white/30 rounded-xl cursor-pointer hover:border-blue-400 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400 mb-4"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="text-sm text-gray-400">
                        <span className="font-medium text-blue-400 hover:text-blue-300">
                          Click to upload
                        </span>{" "}
                        or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        PDF, DOC, or DOCX (max 10MB)
                      </p>
                    </div>
                  </label>
                  {resume && (
                    <div className="mt-2 flex items-center text-sm text-green-400">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {resume.name}
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                  className="px-8 py-4 bg-blue-600 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none hover:from-blue-400/90 hover:to-purple-400/90"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting Application...
                    </div>
                  ) : (
                    "Submit Application"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
