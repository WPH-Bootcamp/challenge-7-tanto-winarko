const Portfolio = () => {
  return (
    <section id="projects">
      <div className="flex flex-col justify-center items-center text-center">
        <div className="flex flex-col text-center gap-4 py-10 px-4 w-90.25 md:w-auto">
          <span className="text-[28px] font-bold leading-9.5">
            From Vision to Launch! Projects We’re Proud Of
          </span>
          <span className="text-[14px] leading-7 text-[#a4a7ae] font-medium">
            Take a closer look at our recent work powering startups,
            enterprises, and everything in between.
          </span>
          <div className="w-full flex flex-col justify-center items-center gap-5 md:flex-row md:gap-2 lg:gap-6">
            <div className="flex flex-col justify-center items-center text-center w-88.75 md:w-58.75 lg:w-[320px]">
              <img
                src="./assets/images/portofolio1.svg"
                alt="Portofolio 1"
                className="w-full"
              />
              <span className="text-sm leading-7 font-medium text-[#FF623E] text-left w-full">
                Landing Page
              </span>
              <span className="text-base leading-7.5 font-bold text-left w-full">
                Portofolio 1
              </span>
            </div>
            <div className="flex flex-col justify-center items-center text-center w-88.75 md:w-58.75 lg:w-[320px]">
              <img
                src="./assets/images/portofolio2.svg"
                alt="Portofolio 2"
                className="w-full"
              />
              <span className="text-sm leading-7 font-medium text-[#FF623E] text-left w-full">
                Landing Page
              </span>
              <span className="text-base leading-7.5 font-bold text-left w-full">
                Portofolio 2
              </span>
            </div>
            <div className="flex flex-col justify-center items-center text-center w-88.75 md:w-58.75 lg:w-[320px]">
              <img
                src="./assets/images/portofolio3.svg"
                alt="Portofolio 3"
                className="w-full"
              />
              <span className="text-sm leading-7 font-medium text-[#FF623E] text-left w-full">
                Landing Page
              </span>
              <span className="text-base leading-7.5 font-bold text-left w-full">
                Portofolio 3
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
