import React from "react";

function Home() {
  return (
    <div>
      <div className="w-full h-full">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDbzpE2oQZB9Wmio6e_wnjbj1p4MNiTGCBLQ&s"
          alt="college-logo"
          className="w-full h-fit object-contain max-w-[350px] md:max-w-[600px] pt-40 mx-auto"
        />
      </div>
      <div>
        <p className="text-center text-4xl font-bold mt-4 sm:px-6 px-0">
          GOVERNMENT E. RAGAHAVENDER RAO POSTGRADUATE SCIENCE COLLEGE ,<br />{" "}
          BILASPUR CHHATTISGARH
        </p>
      </div>
      <div>
        <p className="text-center text-[27px] font-bold mt-6 sm:px-6 px-0 text-red-700">
          Affiliated to Atal Bihari Vajpayee Vishwavidyalaya, Bilaspur (C.G.)
        </p>
      </div>
      <div>
        <p className="text-center text-[27px] font-bold mt-6 sm:px-6 px-0 ">
          Grade "B+" Accredited by NAAC
        </p>
      </div>
      <div className="w-full h-full">
        <img
          src="http://www.sciencecollegebilaspur.ac.in/img/common_img/naac_accredited_logo.png"
          alt="Rank-logo"
          className="w-full h-fit object-contain max-w-[200px] md:max-w-[400px] pt-20 mx-auto"
        />
      </div>
    </div>
  );
}

export default Home;
