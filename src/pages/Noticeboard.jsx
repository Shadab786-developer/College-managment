import React, { useState } from "react";
import { motion } from "framer-motion";

function Noticeboard() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const notices = [
    {
      id: 1,
      title: "Exam Schedule Update",
      category: "academic",
      date: "2024-03-15",
      content: "Final examination schedule for semester VI has been released.",
      important: true,
    },
    {
      id: 2,
      title: "Science Exhibition",
      category: "events",
      date: "2024-03-20",
      content:
        "Annual Science Exhibition will be held in the college auditorium.",
      important: false,
    },
    // Add more notices as needed
  ];

  const categories = [
    { id: "all", label: "All Notices" },
    { id: "academic", label: "Academic" },
    { id: "events", label: "Events" },
    { id: "sports", label: "Sports" },
    { id: "placement", label: "Placement" },
  ];

  const filteredNotices =
    selectedCategory === "all"
      ? notices
      : notices.filter((notice) => notice.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto sm:mt-[250px] mt-[240px]">
        <h1 className="text-3xl font-bold text-green-800 mb-8">Notice Board</h1>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                selectedCategory === category.id
                  ? "bg-green-800 text-white"
                  : "bg-white text-gray-700 hover:bg-green-50"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Notices Grid */}
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {filteredNotices.map((notice) => (
            <motion.div
              key={notice.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className={`bg-white rounded-lg shadow-md overflow-hidden 
                ${notice.important ? "border-l-4 border-red-500" : ""}`}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {notice.title}
                  </h3>
                  {notice.important && (
                    <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                      Important
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mb-4">{notice.content}</p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-green-600 font-medium capitalize">
                    {notice.category}
                  </span>
                  <span className="text-gray-500">
                    {new Date(notice.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredNotices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No notices found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Noticeboard;
