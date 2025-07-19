import React, { useState } from "react";

const UploadResourceForm = () => {
  const [formData, setFormData] = useState({
    department: "",
    subject: "",
    semester: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Submit logic here (e.g., API call)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100 px-4 ">
      <div className="bg-white p-8 rounded-2xl sm:mt-[15%] mt-[80%] shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-green-700">
          Upload Resource
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Department Name</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="e.g., Computer Science"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Subject Name</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="e.g., Data Structures"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Semester</label>
            <select
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            >
              <option value="">Select Semester</option>
              <option value="1st">1st Semester</option>
              <option value="2nd">2nd Semester</option>
              <option value="3rd">3rd Semester</option>
              <option value="4th">4th Semester</option>
              <option value="5th">5th Semester</option>
              <option value="6th">6th Semester</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Upload File</label>
            <input
              type="file"
              name="file"
              accept=".pdf,.doc,.docx,.ppt,.pptx"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadResourceForm;
