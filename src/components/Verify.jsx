import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const [verifyCode, setverifyCode] = useState(["", "", "", "", "", ""]); // State for 6 verifyCode digits
  const [timeLeft, setTimeLeft] = useState(60); // 60 seconds for verifyCode resend
  const [isResendDisabled, setIsResendDisabled] = useState(true); // Initially disable resend
  const [loading, setLoading] = useState(false); // Add loading state
  const inputRefs = useRef([]); // Refs for each input field
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("email");

  useEffect(() => {
    // Timer for verifyCode resend
    let timer;
    if (isResendDisabled && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsResendDisabled(false);
    }

    return () => clearInterval(timer);
  }, [timeLeft, isResendDisabled]);

  const handleverifyCodeChange = (e, index) => {
    const value = e.target.value;

    // Only allow single digit and numerical input
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newverifyCode = [...verifyCode];
      newverifyCode[index] = value;
      setverifyCode(newverifyCode);

      // Move focus to the next input field if a digit is entered
      if (value && index < verifyCode.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    // Move focus to the previous input field on Backspace if the current is empty
    if (e.key === "Backspace" && !verifyCode[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleResendverifyCode = async () => {
    if (!userEmail) {
      console.log("Email not found for resending verification code.");
      return;
    }

    setLoading(true);

    setTimeLeft(60); // Reset timer
    setIsResendDisabled(true); // Disable resend again
    setverifyCode(["", "", "", "", "", ""]); // Clear verifyCode fields
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus(); // Focus on the first input
    }

    try {
      // Assuming your resend OTP endpoint is similar to the sign-in one
      // You might need to adjust the payload and endpoint based on your backend
      const response = await axios.post(
        `https://myntra-backend-8j4c.onrender.com/api/v1/userAuth/resend-verify-email`, // Placeholder for resend endpoint
        { email: userEmail }, // Assuming it needs the email to resend
        {
          headers: {
            "Content-Type": "application/json", // Often JSON for such requests
          },
        }
      );
      console.log("Resend OTP response:", response.data);
      alert("Verification code resent successfully!");
    } catch (err) {
      console.error("Error resending verification code:", err);

      setIsResendDisabled(false); // Re-enable resend if there's an immediate error
      setTimeLeft(0); // Stop timer immediately on error
    } finally {
      setLoading(false);
    }
  };

  const handleLoginWithPassword = () => {
    navigate("/Login");
  };

  const handleGetHelp = () => {
    // Logic for getting help
    console.log("Getting help...");
    alert("Opening help resources (This is a placeholder action)");
  };

  // New function to handle verification submission
  const handleVerifySubmit = async () => {
    const code = verifyCode.join("");
    console.log(code);
    console.log(userEmail);

    if (verifyCode.length !== 6) {
      // Ensure the code is 6 digits long
      console.log("Please enter the complete 6-digit verification code.");
      return;
    }
    if (!userEmail) {
      console.log("Email not found. Please go back to sign-up/login.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        `http://localhost:7000/api/v1/userAuth/verifyRegisterEmail`,
        {
          email: userEmail, // Send the email (or phone number)
          code: Number(code), // Send the joined verification code
        },
        {
          headers: {
            "Content-Type": "application/json", // Typically application/json for such payloads
          },
        }
      );

      console.log("Verification Success:", response.data);

      navigate("/");
    } catch (err) {
      console.error("Error verifying email:", err);
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Server response data:", err.response.data);
        console.log(
          err.response.data.message ||
            "Verification failed. Invalid code or email."
        );
      } else if (err.request) {
        // The request was made but no response was received
        console.log(
          "No response from server. Please check your internet connection."
        );
      } else {
        // Something happened in setting up the request
        console.log("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Check if all verifyCode digits are entered
  const isverifyCodeComplete = verifyCode.every((digit) => digit !== "");

  return (
    <div className="min-h-screen bg-green-200 flex items-center justify-center p-4 ">
      <div className="bg-white p-16 rounded-lg shadow-lg w-full max-w-md text-center mt-[10%]">
        {/* Top Image/Illustration */}
        <div className="mb-6 flex justify-left">
          <img
            src="https://constant.myntassets.com/pwa/assets/img/3a438cb4-c9bf-4316-b60c-c63e40a1a96d1548071106233-mobile-verification.jpg" // Replace with your actual verifyCode image
            alt="Verify with verifyCode"
            className="w-24 h-24"
          />
        </div>

        <h2 className="text-2xl font-semibold mb-2 text-gray-800">
          Verify Your Email
        </h2>
        <p className="text-gray-600 mb-8">
          Sent to {userEmail || "Your email"}
        </p>

        {/* verifyCode Input Fields */}
        <div className="flex justify-center space-x-4 mb-8">
          {verifyCode.map((digit, index) => (
            <input
              key={index}
              type="tel"
              maxLength="1"
              className="w-14 h-20 text-center text-2xl font-bold border-2 border-gray-300 focus:border-green-500 focus:outline-none focus:ring-0"
              value={digit}
              onChange={(e) => handleverifyCodeChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputRefs.current[index] = el)}
            />
          ))}
        </div>

        {/* Submit button for verification */}
        <button
          type="button"
          onClick={handleVerifySubmit}
          disabled={!isverifyCodeComplete || loading}
          className={`w-full py-3 px-4 rounded-md text-lg font-semibold transition duration-300
                                ${
                                  isverifyCodeComplete && !loading
                                    ? "bg-green-500 text-white hover:bg-green-600"
                                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                }`}
        >
          {loading ? "Verifying..." : "Verify Code"}
        </button>

        {/* Resend verifyCode */}
        <div className="mb-6 text-gray-600 text-sm">
          {isResendDisabled ? (
            <span>
              Resend verifyCode in:{" "}
              <span className="font-semibold text-green-600">
                00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
              </span>
            </span>
          ) : (
            <button
              onClick={handleResendverifyCode}
              className="text-green-600 font-semibold hover:underline focus:outline-none"
            >
              Resend verifyCode
            </button>
          )}
        </div>

        {/* Login using Password */}
        <p className="mb-4 text-gray-600">
          Log in using{" "}
          <button
            onClick={handleLoginWithPassword}
            className="text-green-600 font-semibold hover:underline focus:outline-none"
          >
            Password
          </button>
        </p>

        {/* Get Help */}
        <p className="text-gray-600 text-sm">
          Having trouble logging in?{" "}
          <button
            onClick={handleGetHelp}
            className="text-green-600 font-semibold hover:underline focus:outline-none"
          >
            Get help
          </button>
        </p>
      </div>
    </div>
  );
};

export default Verify;
