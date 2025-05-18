import React, { useState } from "react";

const Notes = () => {
  // State variables for managing active questions and sections
  const [isQuestion, setIsQuestion] = useState(null);
  const [isSection, setIsSection] = useState(null);
  const [isUnit, setIsUnit] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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

  const toggleUnit = (unitId) => {
    setIsUnit(isUnit === unitId ? null : unitId);
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
    {
      id: 4,
      title: " DEPARTMENT OF Physics",
      questions: [
        {
          id: 14,
          question: "1ST Semester",
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
    <div className="container mx-auto mb-[20%] px-4 py-8">
      <div className="flex items-center text-center justify-between mt-[10%]">
        <h1 className="sm:text-[60px] text-[40px] mt-14 font-semibold font-serif mx-auto">
          Department Names
        </h1>
      </div>
      {faq.map((section, index) => (
        <div key={index} className="mt-6">
          <div className="space-y-4">
            <div
              className="cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-50"
              onClick={() => toggleSection(section.id)}
            >
              <div className="w-full text-left p-4 font-bold sm:text-[30px] text-[20px] font-sans rounded-t-lg flex justify-between items-center">
                {section.title}
                <span
                  className={`transform transition-transform duration-300 ${
                    isSection === section.id ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <svg
                    focusable="false"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="sm:h-8 sm:w-10 h-6 w-7"
                  >
                    <path d="M5.41 7.59L4 9l8 8 8-8-1.41-1.41L12 14.17"></path>
                  </svg>
                </span>
              </div>
            </div>

            <div
              className={`transition-all duration-1000 ease-in-out overflow-hidden ${
                isSection === section.id
                  ? "max-h-full opacity-100 mt-2"
                  : "max-h-0 opacity-0"
              }`}
            >
              {section.questions.map((q, qIndex) => (
                <div key={qIndex} className="py-2">
                  <div
                    className="cursor-pointer text-black sm:text-[30px] text-[25px] font-sans font-semibold hover:bg-gray-100 transition-colors duration-200 pl-22 mb-2 rounded-lg py-2 "
                    onClick={() => toggleQuestion(q.id)}
                  >
                    {q.question}
                  </div>
                  <div
                    className={`transition-all duration-1000 ease-in-out overflow-hidden ${
                      isQuestion === q.id
                        ? "max-h-full opacity-100 mt-2"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div
                      className={`transition-all duration-1000 ease-in-out overflow-hidden ${
                        isQuestion === q.id
                          ? "max-h-full opacity-100 mt-2"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {q.units &&
                        q.units.map((unit, uIndex) => (
                          <div key={uIndex} className="ml-8">
                            <div
                              className="cursor-pointer text-black text-[24px] font-sans hover:bg-gray-100 transition-colors duration-200 rounded-lg py-2 px-4"
                              onClick={() => toggleUnit(unit.id)}
                            >
                              {unit.title}
                            </div>
                            <div
                              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                                isUnit === unit.id
                                  ? "max-h-full opacity-100 mt-2"
                                  : "max-h-0 opacity-0"
                              }`}
                            >
                              <div className="bg-gray-50 p-4 rounded-lg ml-4">
                                <p className="text-gray-700 mb-4">
                                  {unit.content}
                                </p>
                                <div className="flex gap-4">
                                  <button
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                                    onClick={() =>
                                      handlePreview(
                                        unit.pdfLink,
                                        `${section.title}_${q.question}_${unit.title}`
                                      )
                                    }
                                  >
                                    Preview
                                  </button>
                                  <button
                                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                                    onClick={() =>
                                      handleDownload(
                                        unit.pdfLink,
                                        `${section.title}_${q.question}_${unit.title}.pdf`
                                      )
                                    }
                                  >
                                    Download
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notes;
