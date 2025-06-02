import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import { motion } from "framer-motion";
function Gallery() {
  const { section } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryData = {
    nss: {
      title: "National Service Scheme",
      images: [
        "https://www.perumonec.ac.in/assets/img/pages/nss.png",
        "./assets/Nss image/nss1.jpg",
        "./assets/Nss image/nss2.jpg",
        "./assets/Nss image/nss3.jpg",
        "./assets/Nss image/nss4.jpg",
        "./assets/Nss image/nss5.jpg",
        "./assets/Nss image/nss6.jpg",
        "./assets/Nss image/nss7.jpg",
        "./assets/Nss image/nss8.jpg",
        "./assets/Nss image/nss9.jpg",
        "./assets/Nss image/nss10.jpg",
        "./assets/Nss image/nss11.jpg",
        "./assets/Nss image/nss12.jpg",
        "./assets/Nss image/nss13.jpg",
        "./assets/Nss image/nss14.jpg",
        "./assets/Nss image/nss15.jpg",
        "./assets/Nss image/nss16.jpg",
        "./assets/Nss image/nss17.jpg",
        "./assets/Nss image/nss18.jpg",
        "./assets/Nss image/nss19.jpg",
        "./assets/Nss image/nss20.jpg",
        "./assets/Nss image/nss21.jpg",
        "./assets/Nss image/nss22.jpg",
        "./assets/Nss image/nss23.jpg",
        "./assets/Nss image/nss24.jpg",
        "./assets/Nss image/nss25.jpg",
        "./assets/Nss image/nss26.jpg",
        "./assets/Nss image/nss27.jpg",
        "./assets/Nss image/nss28.jpg",
        "./assets/Nss image/nss29.jpg",
        "./assets/Nss image/nss30.jpg",
      ],
    },
    ncc: {
      title: "National Cadet Cop's",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu23o3CpzWrPOLNb3-QgjyT_1oXUhLelOKOA&s",
        "./assets/Ncc image/img1.jpg",
        "./assets/Ncc image/img2.jpg",
        "./assets/Ncc image/img3.jpg",
        "./assets/Ncc image/img4.jpg",
        "./assets/Ncc image/img5.jpg",
        "./assets/Ncc image/img6.jpg",
        "./assets/Ncc image/img7.jpg",
        "./assets/Ncc image/img8.jpg",
      ],
    },
    sports: {
      title: "Sports Events",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqZH57yRZllz8H1jSM0pXtmRZ8qO-1O9_DDw&s",
      ],
    },
  };

  const handlePreview = (pdfLink) => {
    try {
      window.open(pdfLink, "_blank");
    } catch (error) {
      console.error("Error opening PDF:", error);
      alert("Unable to preview PDF. Please try downloading instead.");
    }
  };

  const handleDownload = (imageUrl) => {
    const fileName = imageUrl.split("/").pop();
    fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(url);
      });
  };

  // If no section is specified, show the main gallery page
  if (!section) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className={`bg-white rounded-lg shadow-md overflow-hidden 
                     `}
      >
        <div className="flex justify-center items-center  gap-7 flex-wrap sm:mt-[300px] mt-[250px] sm:mb-[100px] mb-[50px]">
          {Object.entries(galleryData).map(([key, data]) => (
            <div
              key={key}
              className="bg-green-800 sm:w-[420px] rounded-lg border-2 sm:h-[600px] w-[220px] h-[350px] mt-3 flex justify-center items-center flex-col  "
            >
              <img
                src={data.images[0]}
                alt={data.title}
                className="sm:h-[380px] sm:w-[380px] h-[150px] w-[200px] rounded-lg"
              />
              <span className="sm:text-3xl text-xl text-white font-semibold mt-7 text-center">
                {data.title}
              </span>
              <Link
                to={`/gallery/${key}`}
                className="sm:text-2xl text-[15px] text-black rounded-lg px-4 py-2 font-semibold bg-white mt-9"
              >
                View gallery
              </Link>
            </div>
          ))}
        </div>
      </motion.div>
    );
  }

  // Show specific gallery section
  const sectionData = galleryData[section];
  if (!sectionData) return <div>Gallery not found</div>;
  const founderCardVariant = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const founderContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-semibold mb-8 ">{sectionData.title}</h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 "
        variants={founderContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        {sectionData.images.map((image, index) => (
          <motion.div
            className="relative group bg-white p-4 rounded-lg shadow-lg cursor-pointer"
            key={index}
            variants={founderCardVariant}
            whileHover={{
              scale: 1.03,
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            <img
              src={image}
              alt={`${sectionData.title} ${index + 1}`}
              onClick={() => handlePreview(image)}
            />
            {/* <button
              onClick={() => handleDownload(image)}
              className="absolute bottom-6 right-6 bg-green-600 text-white px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
            >
              Download
            </button> */}
          </motion.div>
        ))}
      </motion.div>

      {/* Image Preview Modal */}
      <Dialog
        open={selectedImage !== null}
        onClose={() => setSelectedImage(null)}
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-75" />

        <div className="relative z-50 bg-white p-2 rounded-lg max-w-[90vw] max-h-[90vh]">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white bg-red-600 rounded-full w-8 h-8 flex items-center justify-center"
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="Preview"
            className="max-h-fit max-w-[85vw] object-contain"
          />

          <button
            onClick={() => handleDownload(selectedImage)}
            className="absolute bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            Download
          </button>
        </div>
      </Dialog>
    </div>
  );
}

export default Gallery;
