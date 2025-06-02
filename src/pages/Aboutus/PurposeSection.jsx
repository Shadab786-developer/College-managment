export default function PurposeSection() {
  return (
    <section className="bg-[#F8FAFF]   py-16 px-4 text-center">
      <div className="max-w-5xl mx-auto pt-14 sm:mt-[200px] mt-[150px]">
        <h2 className="text-lg font-semibold text-black">
          Every Assessment, Every Insight, Every Hire, Made With Purpose
        </h2>
        <p className="text-black mt-2">
          We envision a world where hiring across languages is seamless,
          unbiased, and intelligent.
        </p>

        <div className="mt-12 flex flex-row md:flex-row justify-center items-start md:items-start gap-6 sm:gap-12">
          {/* Left column */}
          <div className="text-right space-y-5 md:space-y-1  font-bold  min-w-[100px]">
            <div className="text-green-900">SPEAK</div>
            <div className="text-[#02586F]">UNDERSTAND</div>
            <div className="text-[#000949]">CONNECT</div>
          </div>

          {/* Vertical line */}
          <div className="relative">
            <div className="w-[1px] h-[120px] md:h-[90px] bg-black opacity-40 " />
          </div>

          {/* Right column */}
          <div className="text-left text-black space-y-2 max-w-sm text-[14px] ">
            <p>VerbiQ.ai simplifies language hiring through precise,</p>
            <p>culturally relevant assessments.</p>
            <p>No guesswork, just real communication ability</p>
          </div>
        </div>
      </div>
    </section>
  );
}
