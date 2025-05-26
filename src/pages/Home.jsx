import React from "react";

function Home() {
  return (
    <div>
      <div className="flex justify-center items-center w-full py-16">
        <div className="w-1/2 h-1/2 flex flex-col justify-center items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDbzpE2oQZB9Wmio6e_wnjbj1p4MNiTGCBLQ&s"
            alt="college-logo"
            className="w-full h-fit object-contain max-w-[150px] md:max-w-[300px]"
          />
          <p className="text-4xl font-[georgia] text-center ">
            Welcome to <br />
            <span className="text-5xl block mt-4">SCIENCE COLLEGE</span>
          </p>
        </div>
        <div className="w-1/2 h-1/3">
          <a href="#">
            <img
              src="\public\img4.jpg"
              alt="college-logo"
              className="w-fit h-fit object-contain "
            />
          </a>
        </div>
      </div>
      <div className="flex justify-around items-center flex-wrap w-full px-10 py-9">
        <div>
          <h3 className="text-2xl text-green-950 font-[alibi] font-semibold">
            Notes
          </h3>
          <hr className="text-green-800" />
          <div className="bg-green-100 w-[300px] h-[300px] mt-3">
            <ul>
              <li>Department of Information Technology</li>
              <li>Department of Computer Science </li>
              <li>Department of Maths</li>
              <li>Department of Physics</li>
              <li>Department of Chemistry</li>
              <li>Department of Computer Application</li>
              <li>Department of Zoology</li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="text-2xl text-green-950 font-[alibi] font-semibold">
            Syllabus
          </h3>
          <hr className="text-green-800" />
          <div className="bg-green-100 w-[300px] h-[300px] mt-3">
            <ul>
              <li>Department of Information Technology</li>
              <li>Department of Computer Science </li>
              <li>Department of Maths</li>
              <li>Department of Physics</li>
              <li>Department of Chemistry</li>
              <li>Department of Computer Application</li>
              <li>Department of Zoology</li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="text-2xl text-green-950 font-[alibi] font-semibold">
            Question paper
          </h3>
          <hr className="text-green-800" />
          <div className="bg-green-100 w-[300px] h-[300px] mt-3">
            <ul>
              <li>Department of Information Technology</li>
              <li>Department of Computer Science </li>
              <li>Department of Maths</li>
              <li>Department of Physics</li>
              <li>Department of Chemistry</li>
              <li>Department of Computer Application</li>
              <li>Department of Zoology</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
