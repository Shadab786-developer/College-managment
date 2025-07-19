import React from "react";

function Footer() {
  return (
    <div className=" flex items-center justify-around p-16 w-auto bg-white rounded-lg  flex-col md:flex-row  md:items-start space-y-8 md:space-y-0  ">
      {/* Left Section: Logo */}
      <div className="flex-shrink-0">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDbzpE2oQZB9Wmio6e_wnjbj1p4MNiTGCBLQ&s" // Replace with your actual logo path
          alt="University Logo"
          className="w-40 h-40 object-contain"
        />
        <p className="text-center text-sm text-gray-500 mt-4">
          Copyright © 2022
        </p>
      </div>

      {/* Middle Section: Contacts */}
      <div className="text-center md:text-left">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contacts</h2>
        <div className="space-y-2 text-gray-700">
          <div className="flex items-center justify-center md:justify-start">
            <span className="material-icons text-lg mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 10c0 6-9 13-9 13s-9-7-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>{" "}
            {/* You might need to import Material Icons or use an icon library */}
            <span> Seepat Road Sarkanda, Bilaspur (C.G) 495009</span>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2
           19.8 19.8 0 0 1-8.63-3.07
           19.5 19.5 0 0 1-6-6
           19.8 19.8 0 0 1-3.07-8.63
           A2 2 0 0 1 4.11 2h3
           a2 2 0 0 1 2 1.72
           c.12 1.05.36 2.07.72 3.03
           a2 2 0 0 1-.45 2.11
           L8.09 9.91a16 16 0 0 0 6 6
           l1.05-1.05a2 2 0 0 1
           2.11-.45c.96.36 1.98.6 3.03.72
           a2 2 0 0 1 1.72 2z"
              />
            </svg>{" "}
            <span> {"  "}6262066972</span>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <span>
              Other Contact Numbers:{" "}
              <a href="#" className="text-blue-600 hover:underline">
                (Click Here)
              </a>
            </span>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <span className="material-icons text-lg mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </span>{" "}
            <span>
              <a
                href="mailto:registrar@bilaspuruniversity.ac.in"
                className="text-blue-600 hover:underline"
              >
                paratesujal2005@gmail.com
              </a>
            </span>
          </div>
        </div>

        <p className="mt-8 text-gray-600 text-center md:text-left">
          Designed and Maintained by :<br />
          Our Team
        </p>
      </div>

      {/* Right Section: Quick Links */}
      <div className="flex-shrink-0 text-center md:text-left">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick links</h2>
        <ul className="space-y-2 text-blue-600">
          <li>
            <a href="#" className="hover:underline">
              College Notifications
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Affiliated Colleges
            </a>
          </li>
          <li>
            <a href="/syllabus" className="hover:underline">
              Syllabus
            </a>
          </li>
          <li>
            <a href="/gallery" className="hover:underline">
              Gallery
            </a>
          </li>
          <li>
            <a href="/noticeboard" className="hover:underline">
              Time Table
            </a>
          </li>
          <li>
            <a href="/noticeboard" className="hover:underline">
              Results
            </a>
          </li>
          <li>
            <a href="/contactus" className="hover:underline">
              Form Download
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
