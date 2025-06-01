import React from "react";

function Footer() {
  return (
    <footer className="w-screen bg-white ">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 ">
        {/* Desktop Layout */}
        <div className="flex flex-col">
          <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
            {/* Logo */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDbzpE2oQZB9Wmio6e_wnjbj1p4MNiTGCBLQ&s"
              alt="VerbiQ.ai"
              className="h-30 w-30 shrink-0"
            />

            {/* Links Grid */}
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
              {/* Left Column */}
              <div className="space-y-4">
                <a
                  href="#"
                  className="block text-[#00046C] hover:text-opacity-80"
                >
                  About Us
                </a>
                <a
                  href="/blog"
                  className="block text-[#00046C] hover:text-opacity-80"
                >
                  Gallery
                </a>
              </div>

              {/* Middle Column */}
              <div className="space-y-4">
                <a
                  href="/registration"
                  className="block text-[#00046C] hover:text-opacity-80"
                >
                  Notice Board
                </a>
                <a
                  href="https://www.linkedin.com/newsletters/7185962989202669569/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-[#00046C] hover:text-opacity-80"
                >
                  Contact Us
                </a>
              </div>

              {/* Right Column - Social Links */}
              <div className="col-span-2 space-y-4 md:col-span-1 sm:pl-16">
                <div className="flex sm:flex-col flex-row sm:space-y-4 space-x-3">
                  <a
                    href="https://www.linkedin.com/company/recrutorycompany/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-[#00046C] hover:text-opacity-80"
                  >
                    <img
                      src="./assets/image 213.png"
                      alt="LinkedIn"
                      className="h-6 w-6"
                    />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://www.instagram.com/verbiq.ai/?igsh=YjJ1Z2V1aTV2d2Vq#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-[#00046C] hover:text-opacity-80"
                  >
                    <img
                      src="./assets/image 214.png"
                      alt="Instagram"
                      className="h-6 w-6"
                    />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 col-span-1 sm:-mt-2">
              <div className="block text-[#00046C] font-medium">9373902340</div>
              <div className="block text-[#00046C] font-medium">
                hr@verbiq.ai
              </div>
            </div>
          </div>

          {/* Bottom Border */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
