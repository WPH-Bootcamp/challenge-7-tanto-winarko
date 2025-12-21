import { useState } from "react";

const Faq = () => {
  const [activeFaq1, setActiveFaq1] = useState(false);
  const [activeFaq2, setActiveFaq2] = useState(false);
  const [activeFaq3, setActiveFaq3] = useState(false);
  const [activeFaq4, setActiveFaq4] = useState(false);
  const [activeFaq5, setActiveFaq5] = useState(false);

  return (
    <section id="faq">
      <div className="w-full flex flex-col justify-center items-center text-center pb-6 px-4 pt-10 mb-6 md:px-30 md:pt-20">
        <div className="w-full flex flex-col text-left pb-6 md:flex-row md:justify-between md:pb-12">
          <span className="text-3xl font-bold pb-4 md:w-62.5">
            Need Help? Start Here.
          </span>
          <span className="descSection text-[#717680] dark:text-[#a4a7ae] md:text-right md:w-50">
            Everything you need to know — all in one place.
          </span>
        </div>
        <hr className="border border-[#DFDFDF] dark:border-[#252B37] w-auto" />
        <div className="w-full flex flex-col md:flex-row md:justify-between">
          <div className="w-full flex flex-col gap-7">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row justify-between items-center">
                <span className="titleSection text-left">
                  What Services Do You Offer?
                </span>
                <div
                  className="relative cursor-pointer"
                  onClick={() => setActiveFaq1(!activeFaq1)}
                >
                  <img
                    src={`${
                      activeFaq1
                        ? "./assets/images/Min Icon-darkmode.svg"
                        : "./assets/images/Add Icon-darkmode.svg"
                    }`}
                    className={`w-6 relative invisible dark:visible`}
                    id="showHideDark1"
                  />
                  <img
                    src={`${
                      activeFaq1
                        ? "./assets/images/Min Icon-lightmode.svg"
                        : "./assets/images/Add Icon-lightmode.svg"
                    }`}
                    className={`w-6 absolute top-0 visible dark:invisible`}
                    id="showHideLight1"
                  />
                </div>
              </div>
              <div
                className={`${
                  activeFaq1
                    ? "flex justify-start text-left visible "
                    : "hidden "
                }`}
              >
                <span className="descSection text-left text-[#717680] dark:text-[#a4a7ae]">
                  We provide custom web/app development, cloud solutions, UX/UI
                  design, and more.
                </span>
              </div>
            </div>
            <hr className="border border-[#DFDFDF] dark:border-[#252B37] w-auto" />
            <div className="flex flex-col gap-4">
              <div className="flex flex-row justify-between items-center">
                <span className="titleSection text-left">
                  How do I know if this is right for my business?
                </span>
                <div
                  className="relative cursor-pointer"
                  onClick={() => setActiveFaq2(!activeFaq2)}
                >
                  <img
                    src={`${
                      activeFaq2
                        ? "./assets/images/Min Icon-darkmode.svg"
                        : "./assets/images/Add Icon-darkmode.svg"
                    }`}
                    className={`w-6 relative invisible dark:visible`}
                    id="showHideDark1"
                  />
                  <img
                    src={`${
                      activeFaq2
                        ? "./assets/images/Min Icon-lightmode.svg"
                        : "./assets/images/Add Icon-lightmode.svg"
                    }`}
                    className={`w-6 absolute top-0 visible dark:invisible`}
                    id="showHideLight1"
                  />
                </div>
              </div>
              <div
                className={`${
                  activeFaq2
                    ? "flex justify-start text-left visible "
                    : "hidden "
                }`}
              >
                <span className="descSection text-left text-[#717680] dark:text-[#a4a7ae]">
                  Book a free consult — we’ll assess your goals and recommend
                  the right approach.
                </span>
              </div>
            </div>
            <hr className="border border-[#DFDFDF] dark:border-[#252B37] w-auto" />
            <div className="flex flex-col gap-4">
              <div className="flex flex-row justify-between items-center">
                <span className="titleSection text-left">
                  How much does a project cost?
                </span>
                <div
                  className="relative cursor-pointer"
                  onClick={() => setActiveFaq3(!activeFaq3)}
                >
                  <img
                    src={`${
                      activeFaq3
                        ? "./assets/images/Min Icon-darkmode.svg"
                        : "./assets/images/Add Icon-darkmode.svg"
                    }`}
                    className={`w-6 relative invisible dark:visible`}
                    id="showHideDark1"
                  />
                  <img
                    src={`${
                      activeFaq3
                        ? "./assets/images/Min Icon-lightmode.svg"
                        : "./assets/images/Add Icon-lightmode.svg"
                    }`}
                    className={`w-6 absolute top-0 visible dark:invisible`}
                    id="showHideLight1"
                  />
                </div>
              </div>
              <div
                className={`${
                  activeFaq3
                    ? "flex justify-start text-left visible "
                    : "hidden "
                }`}
              >
                <span className="descSection text-left text-[#717680] dark:text-[#a4a7ae]">
                  Every project is different. Let’s talk about your needs to get
                  a tailored estimate.
                </span>
              </div>
            </div>
            <hr className="border border-[#DFDFDF] dark:border-[#252B37] w-auto" />
            <div className="flex flex-col gap-4">
              <div className="flex flex-row justify-between items-center">
                <span className="titleSection text-left">
                  How long does it take?
                </span>
                <div
                  className="relative cursor-pointer"
                  onClick={() => setActiveFaq4(!activeFaq4)}
                >
                  <img
                    src={`${
                      activeFaq4
                        ? "./assets/images/Min Icon-darkmode.svg"
                        : "./assets/images/Add Icon-darkmode.svg"
                    }`}
                    className={`w-6 relative invisible dark:visible`}
                    id="showHideDark1"
                  />
                  <img
                    src={`${
                      activeFaq4
                        ? "./assets/images/Min Icon-lightmode.svg"
                        : "./assets/images/Add Icon-lightmode.svg"
                    }`}
                    className={`w-6 absolute top-0 visible dark:invisible`}
                    id="showHideLight1"
                  />
                </div>
              </div>
              <div
                className={`${
                  activeFaq4
                    ? "flex justify-start text-left visible "
                    : "hidden "
                }`}
              >
                <span className="descSection text-left text-[#717680] dark:text-[#a4a7ae]">
                  Depends on scope — but we always prioritize quality and
                  deadlines.
                </span>
              </div>
            </div>
            <hr className="border border-[#DFDFDF] dark:border-[#252B37] w-auto" />
            <div className="flex flex-col gap-4 w-auto">
              <div className="flex flex-row justify-between items-center">
                <span className="titleSection text-left">
                  Can I start with a small project first?
                </span>
                <div
                  className="relative cursor-pointer"
                  onClick={() => setActiveFaq5(!activeFaq5)}
                >
                  <img
                    src={`${
                      activeFaq5
                        ? "./assets/images/Min Icon-darkmode.svg"
                        : "./assets/images/Add Icon-darkmode.svg"
                    }`}
                    className={`w-6 relative invisible dark:visible`}
                    id="showHideDark1"
                  />
                  <img
                    src={`${
                      activeFaq5
                        ? "./assets/images/Min Icon-lightmode.svg"
                        : "./assets/images/Add Icon-lightmode.svg"
                    }`}
                    className={`w-6 absolute top-0 visible dark:invisible`}
                    id="showHideLight1"
                  />
                </div>
              </div>
              <div
                className={`${
                  activeFaq5
                    ? "flex justify-start text-left visible "
                    : "hidden "
                }`}
              >
                <span className="descSection text-left text-[#717680] dark:text-[#a4a7ae]">
                  Absolutely. We often begin with MVPs or pilot projects.
                </span>
              </div>
            </div>
          </div>

          {/*<!-- End of FAQ -->*/}

          <div className="flex justify-center items-start text-left mb-10 mt-6 md:justify-end md:pr-0 md:mr-0">
            <div className="mx-4 p-5 bg-[#CC4E32] rounded-2xl w-90.25 md:w-auto">
              <span className="flex flex-col items-center gap-4">
                <div className="gap-1">
                  <span className="text-3xl font-bold text-left leading-9.5 text-white dark:text-black">
                    Let's talk it through
                  </span>
                  <br />
                  <span className="text-base text-white font-medium text-left leading-7">
                    book a free consultation with our team.
                  </span>
                </div>
                <img
                  src="./assets/images/Consultation Image.svg"
                  alt="Project Consultation"
                  className="w-auto"
                />
              </span>
              <input
                type="button"
                value="Free Consultation"
                className="mt-4 h-11 w-full font-bold text-base bg-white text-black rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
