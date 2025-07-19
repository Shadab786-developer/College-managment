import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBook,
  FaDownload,
  FaEye,
  FaChevronDown,
  FaFileUpload,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Syllabus() {
  const [isQuestion, setIsQuestion] = useState(null);
  const [isSection, setIsSection] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const isAdmin = localStorage.getItem("role");

  const navigate = useNavigate();

  const handleDownload = async (pdfLink, fileName) => {
    setIsLoading(true);
    try {
      const response = await fetch(pdfLink);
      if (!response.ok) throw new Error("PDF not found");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading PDF:", error);
      alert("Unable to download PDF. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpload = () => {
    navigate("/upload");
  };

  const handlePreview = (pdfLink, title) => {
    try {
      window.open(pdfLink, "_blank");
    } catch (error) {
      console.error("Error opening PDF:", error);
      alert("Unable to preview PDF. Please try downloading instead.");
    }
  };
  // Function to toggle the active question
  const toggleQuestion = (questionId) => {
    setIsQuestion(isQuestion === questionId ? null : questionId);
  };

  // Function to toggle the active section
  const toggleSection = (sectionId) => {
    setIsSection(isSection === sectionId ? null : sectionId);
    setIsQuestion(null);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  // Array of FAQs with their sections and questions
  const faq = [
    {
      id: 1,
      title: "  DEPARTMENT OF INFORMATION TECHNOLOGY",
      questions: [
        {
          id: 14,
          question: "1ST Semester",

          units: [
            {
              id: 1,
              title: "DSC",
              content: "RDBMS",
              pdfLink: "/notfound",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
            {
              id: 3,
              title: "Unit 3",
              content: "Unit 3 content goes here",
            },
            {
              id: 4,
              title: "Unit 4",
              content: "Unit 4 content goes here",
            },
          ],
        },
        {
          id: 2,
          question: "2ND Semester",
          units: [
            {
              id: 1,
              title: "ITDSC-2 [Programming in C++]",
              content: "Programming in C++",
              pdfLink: "/pdf/IT/2nd sem syllabus ITSC -2.pdf",
            },
          ],
        },
        {
          id: 3,
          question: "3RD Semester",
          units: [
            {
              id: 1,
              title: "ITDSC-3 [Operating System]",
              content: "Operating System",
              pdfLink: "/pdf/IT/3rd sem syllabus ITSC - 3.pdf",
            },
            {
              id: 1,
              title: "ITSE-1 [Digital Electronics]",
              content: "Digital Electronics",
              pdfLink: "/pdf/IT/3rd sem syllabus ITSE - 1.pdf",
            },
          ],
        },
        {
          id: 4,
          question: "4TH Semester",
          units: [
            {
              id: 1,
              title: "ITDSC-4 [Data Structure]",
              content: "Data Structure",
              pdfLink: "/pdf/IT/4th sem syllabus ITSC - 4.pdf",
            },
            {
              id: 1,
              title: "ITSE-1 [Multimedia]",
              content: "Multimedia",
              pdfLink: "/pdf/IT/4th sem syllabus ITSE - 2.pdf",
            },
          ],
        },
        {
          id: 5,
          question: "5TH Semester",
          units: [
            {
              id: 1,
              title: "ITDSC-5 [Data Communication & Networking]",
              content: "Data Communication & Networking",
              pdfLink: "/pdf/IT/5th sem syllabus ITSC - 5.pdf",
            },
            {
              id: 2,
              title: "ITSE-2 [Software Engeneering]",
              content: "Software Engeneering",
              pdfLink: "/pdf/IT/5th sem syllabus ITSE - 4.pdf",
            },
            {
              id: 3,
              title: "ITSE - 4 [JAVA]",
              content: "JAVA",
              pdfLink: "/pdf/IT/5th sem syllabus ITSE - 3.pdf",
            },
          ],
        },
        {
          id: 6,
          question: "6TH Semester",
          units: [
            {
              id: 1,
              title: `ITDSC-6  [RDBMS]`,
              content: "RDBMS",
              pdfLink: "/pdf/IT/6th sem syllabus ITSC - 6.pdf",
            },
            {
              id: 2,
              title: "ITSE - 5 [Web Technology]",
              content: "Web Technology",
              pdfLink: "/pdf/IT/6th sem syllabus ITSE - 5.pdf",
            },
            {
              id: 3,
              title: "DSE - 2 [Advance Trends in IT]",
              content: "Advance Trends in IT",
              pdfLink: "/pdf/IT/6th sem syllabus ITSE - 6.pdf",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "DEPARTMENT OF COMPUTER SCIENCE",
      questions: [
        {
          id: 14,
          question: "1ST Semester",
          units: [
            {
              id: 1,
              title: "CSSC - 1 [Computer Fundamentals & PC Package]",
              content: "Computer Fundamentals & PC Package",
              pdfLink: "/pdf/CS/1st sem syllabus CSSC - 1.pdf",
            },
          ],
        },
        {
          id: 2,
          question: "2ND Semester",
          units: [
            {
              id: 1,
              title: "CSSC - 2 [Programming Methodology in 'C']",
              content: "Programming Methodology in 'C'",
              pdfLink: "/pdf/CS/2nd sem syllabus CSSC - 2.pdf",
            },
          ],
        },
        {
          id: 3,
          question: "3RD Semester",
          units: [
            {
              id: 1,
              title: "CSSC - 3 [Computer System Architecture]",
              content: "Computer System Architecture",
              pdfLink: "/pdf/CS/3rd sem syllabus CSSC - 3.pdf",
            },
            {
              id: 2,
              title: "CSSE - 1 [Computer Networks]",
              content: "Computer Networks",
              pdfLink: "/pdf/CS/3rd sem syllabus CSSE - 1.pdf",
            },
          ],
        },
        {
          id: 4,
          question: "4TH Semester",
          units: [
            {
              id: 1,
              title: "CSSC - 4 [Object Oriented Programming]",
              content: "Object Oriented Programming",
              pdfLink: "/pdf/CS/4th sem syllabus CSSC - 4.pdf",
            },
            {
              id: 2,
              title: "CSSE - 2 [Internet Technologies]",
              content: "Internet Technologies",
              pdfLink: "/pdf/CS/4th sem syllabus CSSE - 2.pdf",
            },
          ],
        },
        {
          id: 5,
          question: "5TH Semester",
          units: [
            {
              id: 1,
              title: "CSSC - 5 [Operating System]",
              content: "Operating System",
              pdfLink: "/pdf/CS/5th sem syllabus CSSC - 5.pdf",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
          ],
        },
        {
          id: 6,
          question: "6TH Semester",
          units: [
            {
              id: 1,
              title: "CSSC - 6 [Relational Database Management System]",
              content: "Relational Database Management System",
              pdfLink: "/pdf/CS/6th sem syllabus CSSC - 6.pdf",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      title: " DEPARTMENT OF MATHEMATICS",
      questions: [
        {
          id: 14,
          question: "1ST Semester",
          units: [
            {
              id: 1,
              title: "MSC-1 [Calculas]",
              content: "Calculas",
              pdfLink: "/pdf/MATHS/1st sem syllabus MSC - 1.pdf",
            },
          ],
        },
        {
          id: 2,
          question: "2ND Semester",
          units: [
            {
              id: 1,
              title: "MSC-2 [Algebra]",
              content: "Algebra",
              pdfLink: "/pdf/MATHS/2nd sem syllabus MSC - 2.pdf",
            },
          ],
        },
        {
          id: 3,
          question: "3RD Semester",
          units: [
            {
              id: 1,
              title: "MSC-3 [Differential Equations]",
              content: "Differential Equations",
              pdfLink: "/pdf/MATHS/3rd sem syallabus MSC - 3.pdf",
            },
            {
              id: 2,
              title: "MSE-1 [Advance Calculas]",
              content: "Advance Calculas",
              pdfLink: "/pdf/MATHS/3rd sem syallabus MSE - 1.pdf",
            },
          ],
        },
        {
          id: 4,
          question: "4TH Semester",
          units: [
            {
              id: 1,
              title: "MSC-4",
              content: "Real Analysis",
              pdfLink: "/pdf/MATHS/4th sem syllabus MSC - 4.pdf",
            },
            {
              id: 2,
              title: "MSE-2 [Mechanics]",
              content: "Machanics",
              pdfLink: "/pdf/MATHS/4th sem syllabus MSE - 2.pdf",
            },
          ],
        },
        {
          id: 5,
          question: "5TH Semester",
          units: [
            {
              id: 1,
              title: "MSC-5 [Linear Algebra]",
              content: "Linear Algebra",
              pdfLink: "/pdf/MATHS/5th sem syllabus MSC - 5.pdf",
            },
            {
              id: 2,
              title: "MSE-3 [Complex Analysis]",
              content: "Complex Analysis",
              pdfLink: "/pdf/MATHS/5th sem syllabus MSE - 3.pdf",
            },
            {
              id: 3,
              title: "MSE-4 [Discrete Mathematics",
              pdfLink: "/pdf/MATHS/5th sem syllabus MSE - 4.pdf",
            },
          ],
        },
        {
          id: 6,
          question: "6TH Semester",
          units: [
            {
              id: 1,
              title: "MSC-6 [Metric Space]",
              content: "Metric Space",
              pdfLink: "/pdf/MATHS/6th sem syllabus MSC - 6.pdf",
            },
            {
              id: 2,
              title: "MSE-5 [Special Function]",
              content: "Special Function",
              pdfLink: "/pdf/MATHS/6th sem syllabus MSE - 5.pdf",
            },
            {
              id: 3,
              title: "MSE-6 [Graph Theory]",
              content: "Graph Theory",
              pdfLink: "/pdf/MATHS/6th sem syllabus MSE - 6.pdf",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      title: " DEPARTMENT OF PHYSICS",
      questions: [
        {
          id: 14,
          question: "1ST Semester",
          units: [
            {
              id: 1,
              title: "PSC-1 [Mechanics]",
              content: "Machanics",
              pdfLink: "/pdf/PHYSICS/1st sem syllabus PSC - 1.pdf",
            },
          ],
        },
        {
          id: 2,
          question: "2ND Semester",
          units: [
            {
              id: 1,
              title: "PSC-2 [Electricity and Magnetism]",
              pdfLink: "/pdf/PHYSICS/2nd sem syllabus PSC - 2.pdf",
            },
          ],
        },
        {
          id: 3,
          question: "3RD Semester",
          units: [
            {
              id: 1,
              title: "PSC-3 [Thermal Physics & Statistical Mechanics]",
              content: "Thermal Physics  & Statistical Mechanics",
              pdfLink: "/pdf/PHYSICS/3rd sem syllabus PSC - 3.pdf",
            },
            {
              id: 2,
              title: "PSE-1 [Analog Circuit & Instrumentation]",
              content: "Analog Circuit & Instrumentation",
              pdfLink: "/pdf/PHYSICS/3rd sem syllabus PSE- 1.pdf",
            },
          ],
        },
        {
          id: 4,
          question: "4TH Semester",
          units: [
            {
              id: 1,
              title: "PSC-4 [Wave & Optics]",
              content: "Wave & Optics",
              pdfLink: "/pdf/PHYSICS/4th sem syllabus PSC - 4.pdf",
            },
            {
              id: 2,
              title: "PSE-2 [Fundamentals Of Modern Physics]",
              content: "Fundamentals Of Modern Physics",
              pdfLink: "/pdf/PHYSICS/4th sem syllabus PSE - 2.pdf",
            },
          ],
        },
        {
          id: 5,
          question: "5TH Semester",
          units: [
            {
              id: 1,
              title: "PSC-5 [Modern Physics]",
              content: "Modern Physics",
              pdfLink: "/pdf/PHYSICS/5th sem syllabus PSC - 5.pdf",
            },
            {
              id: 2,
              title: "PSE-3 [Clacical Mechanics]",
              content: "Clacical Mechanics",
              pdfLink: "/pdf/PHYSICS/5th sem syllabus PSE - 3.pdf",
            },
            {
              id: 3,
              title: "PSE-4 [Biophysics]",
              content: "Biophysics",
              pdfLink: "/pdf/PHYSICS/5th sem syllabus PSE - 4.pdf",
            },
          ],
        },
        {
          id: 6,
          question: "6TH Semester",
          units: [
            {
              id: 1,
              title: "PSC-6 [Solid State Physics]",
              content: "Solid State Physics",
              pdfLink: "/pdf/PHYSICS/6th sem syllabus PSC - 6.pdf",
            },
            {
              id: 2,
              title: "PSE-5 [Mathematical Physics]",
              content: "Mathematical Physics",
              pdfLink: "/pdf/PHYSICS/6th sem syllabus PSE - 5.pdf",
            },
            {
              id: 3,
              title: "PSE-6 [Nuclear & Particle Physics]",
              content: "Nuclear & Particle Physics",
              pdfLink: "/pdf/PHYSICS/6th sem Syllabus PSE - 6.pdf",
            },
          ],
        },
      ],
    },
    {
      id: 5,
      title: "DEPARTMENT OF MICROBIOLOGY",
      questions: [
        {
          id: 14,
          question: "1ST Semester",
          units: [
            {
              id: 1,
              title: "DSC",
              content: "RDBMS",
              pdfLink: "/notfound",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
            {
              id: 3,
              title: "Unit 3",
              content: "Unit 3 content goes here",
            },
            {
              id: 4,
              title: "Unit 4",
              content: "Unit 4 content goes here",
            },
          ],
        },
        {
          id: 2,
          question: "2ND Semester",
          units: [
            {
              id: 1,
              title: "DSC",
              content: "RDBMS",
              pdfLink: "/notfound",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
            {
              id: 3,
              title: "Unit 3",
              content: "Unit 3 content goes here",
            },
            {
              id: 4,
              title: "Unit 4",
              content: "Unit 4 content goes here",
            },
          ],
        },
        {
          id: 3,
          question: "3RD Semester",
          units: [
            {
              id: 1,
              title: "DSC",
              content: "RDBMS",
              pdfLink: "/notfound",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
            {
              id: 3,
              title: "Unit 3",
              content: "Unit 3 content goes here",
            },
            {
              id: 4,
              title: "Unit 4",
              content: "Unit 4 content goes here",
            },
          ],
        },
        {
          id: 4,
          question: "4TH Semester",
          units: [
            {
              id: 1,
              title: "DSC",
              content: "RDBMS",
              pdfLink: "/notfound",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
            {
              id: 3,
              title: "Unit 3",
              content: "Unit 3 content goes here",
            },
            {
              id: 4,
              title: "Unit 4",
              content: "Unit 4 content goes here",
            },
          ],
        },
        {
          id: 5,
          question: "5TH Semester",
          units: [
            {
              id: 1,
              title: "DSC",
              content: "RDBMS",
              pdfLink: "/notfound",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
            {
              id: 3,
              title: "Unit 3",
              content: "Unit 3 content goes here",
            },
            {
              id: 4,
              title: "Unit 4",
              content: "Unit 4 content goes here",
            },
          ],
        },
        {
          id: 6,
          question: "6TH Semester",
          units: [
            {
              id: 1,
              title: "DSC",
              content: "RDBMS",
              pdfLink: "/notfound",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
            {
              id: 3,
              title: "Unit 3",
              content: "Unit 3 content goes here",
            },
            {
              id: 4,
              title: "Unit 4",
              content: "Unit 4 content goes here",
            },
          ],
        },
      ],
    },
    {
      id: 6,
      title: "DEPARTMENT OF BIOTECHNOLOGY ",
      questions: [
        {
          id: 14,
          question: "1ST Semester",
          units: [
            {
              id: 1,
              title: "DSC",
              content: "RDBMS",
              pdfLink: "/notfound",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
            {
              id: 3,
              title: "Unit 3",
              content: "Unit 3 content goes here",
            },
            {
              id: 4,
              title: "Unit 4",
              content: "Unit 4 content goes here",
            },
          ],
        },
        {
          id: 2,
          question: "2ND Semester",
          units: [
            {
              id: 1,
              title: "DSC",
              content: "RDBMS",
              pdfLink: "/notfound",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
            {
              id: 3,
              title: "Unit 3",
              content: "Unit 3 content goes here",
            },
            {
              id: 4,
              title: "Unit 4",
              content: "Unit 4 content goes here",
            },
          ],
        },
        {
          id: 3,
          question: "3RD Semester",
          units: [
            {
              id: 1,
              title: "DSC",
              content: "RDBMS",
              pdfLink: "/notfound",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
            {
              id: 3,
              title: "Unit 3",
              content: "Unit 3 content goes here",
            },
            {
              id: 4,
              title: "Unit 4",
              content: "Unit 4 content goes here",
            },
          ],
        },
        {
          id: 4,
          question: "4TH Semester",
          units: [
            {
              id: 1,
              title: "DSC",
              content: "RDBMS",
              pdfLink: "/notfound",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
            {
              id: 3,
              title: "Unit 3",
              content: "Unit 3 content goes here",
            },
            {
              id: 4,
              title: "Unit 4",
              content: "Unit 4 content goes here",
            },
          ],
        },
        {
          id: 5,
          question: "5TH Semester",
          units: [
            {
              id: 1,
              title: "DSC",
              content: "RDBMS",
              pdfLink: "/notfound",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
            {
              id: 3,
              title: "Unit 3",
              content: "Unit 3 content goes here",
            },
            {
              id: 4,
              title: "Unit 4",
              content: "Unit 4 content goes here",
            },
          ],
        },
        {
          id: 6,
          question: "6TH Semester",
          units: [
            {
              id: 1,
              title: "DSC",
              content: "RDBMS",
              pdfLink: "/notfound",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
            {
              id: 3,
              title: "Unit 3",
              content: "Unit 3 content goes here",
            },
            {
              id: 4,
              title: "Unit 4",
              content: "Unit 4 content goes here",
            },
          ],
        },
      ],
    },
    {
      id: 7,
      title: "DEPARTMENT OF CHEMISTRY",
      questions: [
        {
          id: 14,
          question: "1ST Semester",
          units: [
            {
              id: 1,
              title: "DSC",
              content: "RDBMS",
              pdfLink: "/notfound",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
            {
              id: 3,
              title: "Unit 3",
              content: "Unit 3 content goes here",
            },
            {
              id: 4,
              title: "Unit 4",
              content: "Unit 4 content goes here",
            },
          ],
        },
        {
          id: 2,
          question: "2ND Semester",
          units: [
            {
              id: 1,
              title: "DSC",
              content: "RDBMS",
              pdfLink: "/notfound",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
            {
              id: 3,
              title: "Unit 3",
              content: "Unit 3 content goes here",
            },
            {
              id: 4,
              title: "Unit 4",
              content: "Unit 4 content goes here",
            },
          ],
        },
        {
          id: 3,
          question: "3RD Semester",
          units: [
            {
              id: 1,
              title: "DSC",
              content: "RDBMS",
              pdfLink: "/notfound",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
            {
              id: 3,
              title: "Unit 3",
              content: "Unit 3 content goes here",
            },
            {
              id: 4,
              title: "Unit 4",
              content: "Unit 4 content goes here",
            },
          ],
        },
        {
          id: 4,
          question: "4TH Semester",
          units: [
            {
              id: 1,
              title: "DSC",
              content: "RDBMS",
              pdfLink: "/notfound",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
            {
              id: 3,
              title: "Unit 3",
              content: "Unit 3 content goes here",
            },
            {
              id: 4,
              title: "Unit 4",
              content: "Unit 4 content goes here",
            },
          ],
        },
        {
          id: 5,
          question: "5TH Semester",
          units: [
            {
              id: 1,
              title: "DSC",
              content: "RDBMS",
              pdfLink: "/notfound",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
            {
              id: 3,
              title: "Unit 3",
              content: "Unit 3 content goes here",
            },
            {
              id: 4,
              title: "Unit 4",
              content: "Unit 4 content goes here",
            },
          ],
        },
        {
          id: 6,
          question: "6TH Semester",
          units: [
            {
              id: 1,
              title: "DSC",
              content: "RDBMS",
              pdfLink: "/notfound",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
            {
              id: 3,
              title: "Unit 3",
              content: "Unit 3 content goes here",
            },
            {
              id: 4,
              title: "Unit 4",
              content: "Unit 4 content goes here",
            },
          ],
        },
      ],
    },
    {
      id: 8,
      title: " DEPARTMENT OF GEOLOGY",
      questions: [
        {
          id: 14,
          question: "1ST Semester",
          units: [
            {
              id: 1,
              title: "DSC",
              content: "RDBMS",
              pdfLink: "/notfound",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
            {
              id: 3,
              title: "Unit 3",
              content: "Unit 3 content goes here",
            },
            {
              id: 4,
              title: "Unit 4",
              content: "Unit 4 content goes here",
            },
          ],
        },
        {
          id: 2,
          question: "2ND Semester",
          units: [
            {
              id: 1,
              title: "DSC",
              content: "RDBMS",
              pdfLink: "/notfound",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
            {
              id: 3,
              title: "Unit 3",
              content: "Unit 3 content goes here",
            },
            {
              id: 4,
              title: "Unit 4",
              content: "Unit 4 content goes here",
            },
          ],
        },
        {
          id: 3,
          question: "3RD Semester",
          units: [
            {
              id: 1,
              title: "DSC",
              content: "RDBMS",
              pdfLink: "/notfound",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
            {
              id: 3,
              title: "Unit 3",
              content: "Unit 3 content goes here",
            },
            {
              id: 4,
              title: "Unit 4",
              content: "Unit 4 content goes here",
            },
          ],
        },
        {
          id: 4,
          question: "4TH Semester",
          units: [
            {
              id: 1,
              title: "DSC",
              content: "RDBMS",
              pdfLink: "/notfound",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
            {
              id: 3,
              title: "Unit 3",
              content: "Unit 3 content goes here",
            },
            {
              id: 4,
              title: "Unit 4",
              content: "Unit 4 content goes here",
            },
          ],
        },
        {
          id: 5,
          question: "5TH Semester",
          units: [
            {
              id: 1,
              title: "DSC",
              content: "RDBMS",
              pdfLink: "/notfound",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
            {
              id: 3,
              title: "Unit 3",
              content: "Unit 3 content goes here",
            },
            {
              id: 4,
              title: "Unit 4",
              content: "Unit 4 content goes here",
            },
          ],
        },
        {
          id: 6,
          question: "6TH Semester",
          units: [
            {
              id: 1,
              title: "DSC",
              content: "RDBMS",
              pdfLink: "/notfound",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
            {
              id: 3,
              title: "Unit 3",
              content: "Unit 3 content goes here",
            },
            {
              id: 4,
              title: "Unit 4",
              content: "Unit 4 content goes here",
            },
          ],
        },
      ],
    },
    {
      id: 9,
      title: " DEPARTMENT OF ZOOLOGY",
      questions: [
        {
          id: 14,
          question: "1ST Semester",
          units: [
            {
              id: 1,
              title: "DSC",
              content: "RDBMS",
              pdfLink: "/notfound",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
            {
              id: 3,
              title: "Unit 3",
              content: "Unit 3 content goes here",
            },
            {
              id: 4,
              title: "Unit 4",
              content: "Unit 4 content goes here",
            },
          ],
        },
        {
          id: 2,
          question: "2ND Semester",
          units: [
            {
              id: 1,
              title: "DSC",
              content: "RDBMS",
              pdfLink: "/notfound",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
            {
              id: 3,
              title: "Unit 3",
              content: "Unit 3 content goes here",
            },
            {
              id: 4,
              title: "Unit 4",
              content: "Unit 4 content goes here",
            },
          ],
        },
        {
          id: 3,
          question: "3RD Semester",
          units: [
            {
              id: 1,
              title: "DSC",
              content: "RDBMS",
              pdfLink: "/notfound",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
            {
              id: 3,
              title: "Unit 3",
              content: "Unit 3 content goes here",
            },
            {
              id: 4,
              title: "Unit 4",
              content: "Unit 4 content goes here",
            },
          ],
        },
        {
          id: 4,
          question: "4TH Semester",
          units: [
            {
              id: 1,
              title: "DSC",
              content: "RDBMS",
              pdfLink: "/notfound",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
            {
              id: 3,
              title: "Unit 3",
              content: "Unit 3 content goes here",
            },
            {
              id: 4,
              title: "Unit 4",
              content: "Unit 4 content goes here",
            },
          ],
        },
        {
          id: 5,
          question: "5TH Semester",
          units: [
            {
              id: 1,
              title: "DSC",
              content: "RDBMS",
              pdfLink: "/notfound",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
            {
              id: 3,
              title: "Unit 3",
              content: "Unit 3 content goes here",
            },
            {
              id: 4,
              title: "Unit 4",
              content: "Unit 4 content goes here",
            },
          ],
        },
        {
          id: 6,
          question: "6TH Semester",
          units: [
            {
              id: 1,
              title: "DSC",
              content: "RDBMS",
              pdfLink: "/notfound",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
            {
              id: 3,
              title: "Unit 3",
              content: "Unit 3 content goes here",
            },
            {
              id: 4,
              title: "Unit 4",
              content: "Unit 4 content goes here",
            },
          ],
        },
      ],
    },
    {
      id: 10,
      title: "DEPARTMENT OF BOTANY",
      questions: [
        {
          id: 14,
          question: "1ST Semester",
          units: [
            {
              id: 1,
              title: "DSC",
              content: "RDBMS",
              pdfLink: "/notfound",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
            {
              id: 3,
              title: "Unit 3",
              content: "Unit 3 content goes here",
            },
            {
              id: 4,
              title: "Unit 4",
              content: "Unit 4 content goes here",
            },
          ],
        },
        {
          id: 2,
          question: "2ND Semester",
          units: [
            {
              id: 1,
              title: "DSC",
              content: "RDBMS",
              pdfLink: "/notfound",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
            {
              id: 3,
              title: "Unit 3",
              content: "Unit 3 content goes here",
            },
            {
              id: 4,
              title: "Unit 4",
              content: "Unit 4 content goes here",
            },
          ],
        },
        {
          id: 3,
          question: "3RD Semester",

          units: [
            {
              id: 1,
              title: "DSC",
              content: "RDBMS",
              pdfLink: "/notes",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
            {
              id: 3,
              title: "Unit 3",
              content: "Unit 3 content goes here",
            },
            {
              id: 4,
              title: "Unit 4",
              content: "Unit 4 content goes here",
            },
          ],
        },
        {
          id: 4,
          question: "4TH Semester",
          units: [
            {
              id: 1,
              title: "DSC",
              content: "RDBMS",
              pdfLink: "/notes",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
            {
              id: 3,
              title: "Unit 3",
              content: "Unit 3 content goes here",
            },
            {
              id: 4,
              title: "Unit 4",
              content: "Unit 4 content goes here",
            },
          ],
        },
        {
          id: 5,
          question: "5TH Semester",
          units: [
            {
              id: 1,
              title: "DSC",
              content: "RDBMS",
              pdfLink: "/notes",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
            {
              id: 3,
              title: "Unit 3",
              content: "Unit 3 content goes here",
            },
            {
              id: 4,
              title: "Unit 4",
              content: "Unit 4 content goes here",
            },
          ],
        },
        {
          id: 6,
          question: "6TH Semester",
          units: [
            {
              id: 1,
              title: "DSC",
              content: "RDBMS",
              pdfLink: "/notes",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
            {
              id: 3,
              title: "Unit 3",
              content: "Unit 3 content goes here",
            },
            {
              id: 4,
              title: "Unit 4",
              content: "Unit 4 content goes here",
            },
          ],
        },
      ],
    },
    {
      id: 11,
      title: "DEPARTMENT OF COMPUTER APPLICATION",
      questions: [
        {
          id: 14,
          question: "1ST Semester",
          units: [
            {
              id: 1,
              title: "DSC",
              content: "RDBMS",
              pdfLink: "/pdf/CA/1st sem.pdf",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
            {
              id: 3,
              title: "Unit 3",
              content: "Unit 3 content goes here",
            },
            {
              id: 4,
              title: "Unit 4",
              content: "Unit 4 content goes here",
            },
          ],
        },
        {
          id: 2,
          question: "2ND Semester",
          units: [
            {
              id: 1,
              title: "DSC",
              content: "RDBMS",
              pdfLink: "/notes",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
            {
              id: 3,
              title: "Unit 3",
              content: "Unit 3 content goes here",
            },
            {
              id: 4,
              title: "Unit 4",
              content: "Unit 4 content goes here",
            },
          ],
        },
        {
          id: 3,
          question: "3RD Semester",
          units: [
            {
              id: 1,
              title: "DSC",
              content: "RDBMS",
              pdfLink: "/notes",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
            {
              id: 3,
              title: "Unit 3",
              content: "Unit 3 content goes here",
            },
            {
              id: 4,
              title: "Unit 4",
              content: "Unit 4 content goes here",
            },
          ],
        },
        {
          id: 4,
          question: "4TH Semester",
          units: [
            {
              id: 1,
              title: "DSC",
              content: "RDBMS",
              pdfLink: "/notes",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
            {
              id: 3,
              title: "Unit 3",
              content: "Unit 3 content goes here",
            },
            {
              id: 4,
              title: "Unit 4",
              content: "Unit 4 content goes here",
            },
          ],
        },
        {
          id: 5,
          question: "5TH Semester",
          units: [
            {
              id: 1,
              title: "DSC",
              content: "RDBMS",
              pdfLink: "/notes",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
            {
              id: 3,
              title: "Unit 3",
              content: "Unit 3 content goes here",
            },
            {
              id: 4,
              title: "Unit 4",
              content: "Unit 4 content goes here",
            },
          ],
        },
        {
          id: 6,
          question: "6TH Semester",
          units: [
            {
              id: 1,
              title: "DSC",
              content: "RDBMS",
              pdfLink: "/notes",
            },
            {
              id: 2,
              title: "Unit 2",
              content: "Unit 2 content goes here",
            },
            {
              id: 3,
              title: "Unit 3",
              content: "Unit 3 content goes here",
            },
            {
              id: 4,
              title: "Unit 4",
              content: "Unit 4 content goes here",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section with Parallax Effect */}
      <div className="relative overflow-hidden bg-green-700 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/path/to/pattern.svg')",
            backgroundSize: "cover",
            opacity: 0.1,
          }}
        />
        <div className="relative z-10 py-16 md:py-24 px-4 sm:mt-[200px] mt-[300px]">
          <div className="container mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Academic Resources Hub
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-green-100 max-w-2xl mx-auto"
            >
              Access comprehensive study materials across all departments
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 max-w-xl mx-auto"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search departments, subjects, or units..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 rounded-full text-gray-800 bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <FaBook className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Departments Grid */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-1 gap-8"
        >
          {faq
            .filter((section) =>
              section.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((section) => (
              <motion.div
                key={section.id}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Department Card Header */}
                <div
                  onClick={() => toggleSection(section.id)}
                  className="cursor-pointer p-6 border-b border-gray-100"
                >
                  <div className="flex justify-between items-center">
                    <h2 className="font-bold text-xl text-gray-800">
                      {section.title}
                    </h2>
                    <motion.div
                      animate={{ rotate: isSection === section.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaChevronDown className="text-green-800 w-5 h-5" />
                    </motion.div>
                  </div>
                </div>

                {/* Accordion Content */}
                <AnimatePresence>
                  {isSection === section.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 space-y-4">
                        {section.questions.map((semester) => (
                          <div key={semester.id} className="space-y-3">
                            <button
                              onClick={() => toggleQuestion(semester.id)}
                              className="w-full text-left p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors group"
                            >
                              <div className="flex justify-between items-center">
                                <span className="font-semibold text-gray-700 group-hover:text-green-600">
                                  {semester.question}
                                </span>
                                <motion.div
                                  animate={{
                                    rotate:
                                      isQuestion === semester.id ? 180 : 0,
                                  }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <FaChevronDown className="text-gray-400 group-hover:text-green-600 w-4 h-4" />
                                </motion.div>
                              </div>
                            </button>

                            {/* Units Grid */}
                            <AnimatePresence>
                              {isQuestion === semester.id && (
                                <motion.div
                                  initial={{ opacity: 0, y: -10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  exit={{ opacity: 0, y: -10 }}
                                  className="pl-4 space-y-3"
                                >
                                  {semester.units?.map((unit) => (
                                    <div
                                      key={unit.id}
                                      className="bg-white rounded-xl border border-gray-200 p-4 hover:border-green-300 transition-colors"
                                    >
                                      <h3 className="font-semibold text-lg mb-3 text-gray-800">
                                        {unit.title}
                                      </h3>
                                      {/* {unit.unitNotes?.map((note) => ( */}
                                      <div
                                        key={unit.id}
                                        className="mt-2 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                                      >
                                        <p className="text-gray-600 mb-3">
                                          {unit.description}
                                        </p>
                                        <div className="flex space-x-3">
                                          <button
                                            onClick={() =>
                                              handlePreview(
                                                unit.pdfLink,
                                                unit.title
                                              )
                                            }
                                            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                          >
                                            <FaEye className="mr-2" />
                                            Preview
                                          </button>
                                          <button
                                            onClick={() =>
                                              handleDownload(
                                                unit.pdfLink,
                                                `${unit.title}.pdf`
                                              )
                                            }
                                            className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                                          >
                                            <FaDownload className="mr-2" />
                                            {isLoading
                                              ? "Downloading..."
                                              : "Download"}
                                          </button>
                                          {isAdmin === "admin" ? (
                                            <button
                                              onClick={handleUpload}
                                              className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-950 transition-colors"
                                            >
                                              <FaFileUpload className="mr-2" />
                                              {isLoading
                                                ? "Uploading..."
                                                : "Upload"}
                                            </button>
                                          ) : (
                                            ""
                                          )}
                                        </div>
                                      </div>
                                      {/* ))} */}
                                    </div>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Syllabus;
