import { useState } from "react";
import type { FaqType, FaqProps } from "../../../types/FaqType";

const Faq: React.FC<FaqProps> = ({ faqs }) => {
  const [activeFaq1, setActiveFaq1] = useState(false);
  const [activeFaq2, setActiveFaq2] = useState(false);
  const [activeFaq3, setActiveFaq3] = useState(false);
  const [activeFaq4, setActiveFaq4] = useState(false);
  const [activeFaq5, setActiveFaq5] = useState(false);

  return (
    <section id="faq" className="w-full flex flex-col px-4 md:px-35">
      <div className="w-full flex flex-col justify-center items-center pb-6 pt-10 mb-6 md:pt-20 text-left md:flex-row md:justify-between">
        <span className="w-full text-3xl text-left font-bold pb-4 md:w-62.5">
          Need Help? Start Here.
        </span>
        <span className="descSection w-full text-left text-[#717680] dark:text-[#a4a7ae] md:text-right md:w-50">
          Everything you need to know — all in one place.
        </span>
      </div>
      <hr className="border border-[#DFDFDF] dark:border-[#252B37] w-auto" />
      <div className="flex flex-col justify-center items-center text-left md:space-x-18 pt-6 md:pt-12 md:flex-row md:justify-between md:items-start">
        <div className="w-full flex flex-col justify-center items-center text-left">
          {faqs.map((faqValue: FaqType, index: number) => (
            <div className="w-full ">
              <div className="flex flex-col gap-4">
                <div className="flex flex-row justify-between items-center">
                  <span className="titleSection text-left">
                    {faqValue.question}
                  </span>
                  <div
                    className="relative cursor-pointer"
                    onClick={
                      index === 1
                        ? () => setActiveFaq1(!activeFaq1)
                        : index === 2
                        ? () => setActiveFaq2(!activeFaq2)
                        : index === 3
                        ? () => setActiveFaq3(!activeFaq3)
                        : index === 4
                        ? () => setActiveFaq4(!activeFaq4)
                        : () => setActiveFaq5(!activeFaq5)
                    }
                  >
                    <img
                      src={`${
                        index === 1
                          ? activeFaq1
                            ? "./assets/images/Min Icon-darkmode.svg"
                            : "./assets/images/Add Icon-darkmode.svg"
                          : index === 2
                          ? activeFaq2
                            ? "./assets/images/Min Icon-darkmode.svg"
                            : "./assets/images/Add Icon-darkmode.svg"
                          : index === 3
                          ? activeFaq3
                            ? "./assets/images/Min Icon-darkmode.svg"
                            : "./assets/images/Add Icon-darkmode.svg"
                          : index === 4
                          ? activeFaq4
                            ? "./assets/images/Min Icon-darkmode.svg"
                            : "./assets/images/Add Icon-darkmode.svg"
                          : activeFaq5
                          ? "./assets/images/Min Icon-darkmode.svg"
                          : "./assets/images/Add Icon-darkmode.svg"
                      }`}
                      className={`w-6 relative invisible dark:visible`}
                      id="showHideDark1"
                    />
                    <img
                      src={`${
                        index === 1
                          ? activeFaq1
                            ? "./assets/images/Min Icon-lightmode.svg"
                            : "./assets/images/Add Icon-lightmode.svg"
                          : index === 2
                          ? activeFaq2
                            ? "./assets/images/Min Icon-lightmode.svg"
                            : "./assets/images/Add Icon-lightmode.svg"
                          : index === 3
                          ? activeFaq3
                            ? "./assets/images/Min Icon-lightmode.svg"
                            : "./assets/images/Add Icon-lightmode.svg"
                          : index === 4
                          ? activeFaq4
                            ? "./assets/images/Min Icon-lightmode.svg"
                            : "./assets/images/Add Icon-lightmode.svg"
                          : activeFaq5
                          ? "./assets/images/Min Icon-lightmode.svg"
                          : "./assets/images/Add Icon-lightmode.svg"
                      }`}
                      className={`w-6 relative invisible dark:visible`}
                      id="showHideDark1"
                    />
                  </div>
                </div>
                <div
                  className={`${
                    index === 1
                      ? activeFaq1
                        ? "flex justify-start text-left visible "
                        : "hidden "
                      : index === 2
                      ? activeFaq2
                        ? "flex justify-start text-left visible "
                        : "hidden "
                      : index === 3
                      ? activeFaq3
                        ? "flex justify-start text-left visible "
                        : "hidden "
                      : index === 4
                      ? activeFaq4
                        ? "flex justify-start text-left visible "
                        : "hidden "
                      : activeFaq5
                      ? "flex justify-start text-left visible "
                      : "hidden "
                  }`}
                >
                  <span className="descSection text-left text-[#717680] dark:text-[#a4a7ae] pb-6">
                    {faqValue.answer}
                  </span>
                </div>
              </div>
              {(() => {
                if (index < faqs.length - 1) {
                  return (
                    <hr className="border border-[#DFDFDF] dark:border-[#252B37] w-auto" />
                  );
                }
              })()}
            </div>
          ))}
        </div>
        <div className="flex justify-center items-start text-left mb-10 md:justify-end md:pr-0 md:mr-0">
          <div className=" p-5 bg-[#CC4E32] rounded-2xl w-90.25 md:w-auto">
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
    </section>
  );
};

export default Faq;
