import { useState } from "react";
import type { TestimonialProps } from "../../../types/TestimonialType";

const Testimonials: React.FC<TestimonialProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const prevSlide = () => {
    setCurrentIndex((index) =>
      index === 0 ? testimonials.length - 1 : index - 1
    );
    console.log("index: " + currentIndex);
  };

  const nextSlide = () => {
    setCurrentIndex((index) =>
      index === testimonials.length - 1 ? 0 : index + 1
    );
    console.log("index: " + currentIndex);
  };

  return (
    <section id="testimonials">
      <div className="flex flex-col justify-center items-center text-center">
        <span className="flex flex-col text-center gap-4 pt-10 w-90.25 md:w-auto">
          <p className="text-3xl font-bold">
            What Partners Say About Working With Us
          </p>
          <span className="descSection text-[#717680] dark:text-[#a4a7ae]">
            Trusted voices. Real experiences. Proven results.
          </span>
        </span>
      </div>
      <div className="relative flex flex-col justify-center items-center gap-8.75 w-full h-100 overflow-x-hidden ">
        <div className="flex flex-row justify-center items-center gap-10">
          {/*<!--Gradient Layout Transparent-->*/}
          <div className="absolute left-px z-2 h-100 md:h-80 w-[35%] bg-linear-to-r from-white dark:from-black to-transparent md:visible"></div>
          <div className="absolute right-px z-2 h-100 md:h-80 w-[35%] bg-linear-to-l from-white dark:from-black to-transparent md:visible"></div>
          {/*<!--1st item-->*/}
          <div className="object-cover transition-all duration-500 flex flex-col justify-center text-center w-98.25 shrink-0 md:max-w-148.5 rounded-2xl border border-slate-200 shadow bg-[#FAFAFA] dark:bg-[#0A0D12]">
            <div className="pb-3 pt-4 relative">
              <img
                src="./assets/images/tdesign_quote-filled.svg"
                alt="Quote Icon"
                className="w-16 absolute -top-9 left-3 z-1"
              />
              <div className="relative flex flex-row justify-center items-center">
                <img
                  src="./assets/images/line-md_star-filled.svg"
                  alt="Star Icon"
                  className=""
                />
                <img
                  src="./assets/images/line-md_star-filled.svg"
                  alt="Star Icon"
                  className=""
                />
                <img
                  src="./assets/images/line-md_star-filled.svg"
                  alt="Star Icon"
                  className=""
                />
                <img
                  src="./assets/images/line-md_star-filled.svg"
                  alt="Star Icon"
                  className=""
                />
                <img
                  src="./assets/images/line-md_star-filled.svg"
                  alt="Star Icon"
                  className=""
                />
              </div>
            </div>
            <span className="text-sm font-semibold leading-7 pb-4">
              {currentIndex === 0
                ? testimonials[testimonials.length - 1].testimonialsDesc
                : testimonials[currentIndex - 1].testimonialsDesc}
            </span>
            <span>
              {" "}
              {currentIndex === 0
                ? testimonials[testimonials.length - 1].names
                : testimonials[currentIndex - 1].names}{" "}
            </span>
            <span className="text-[#FF623E] pb-2.5">
              {currentIndex === 0
                ? testimonials[testimonials.length - 1].jobPosition
                : testimonials[currentIndex - 1].jobPosition}
            </span>
            <div className="flex justify-center items-center">
              <img
                src={
                  currentIndex === 0
                    ? testimonials[testimonials.length - 1].profileImage
                    : testimonials[currentIndex - 1].profileImage
                }
                className="w-16 mb-6.5"
              />
            </div>
          </div>
          {/*<!--2nd item-->*/}
          <div className="order-2 object-cover transition-all duration-500 flex flex-col justify-center text-center w-98.25 shrink-0 md:max-w-148.5 rounded-2xl border border-slate-200 shadow bg-[#FAFAFA] dark:bg-[#0A0D12]">
            <div className="pb-3 pt-4 relative">
              <img
                src="./assets/images/tdesign_quote-filled.svg"
                alt="Quote Icon"
                className="w-16 absolute -top-9 left-3 z-1"
              />
              <div className="relative flex flex-row justify-center items-center">
                <img
                  src="./assets/images/line-md_star-filled.svg"
                  alt="Star Icon"
                  className=""
                />
                <img
                  src="./assets/images/line-md_star-filled.svg"
                  alt="Star Icon"
                  className=""
                />
                <img
                  src="./assets/images/line-md_star-filled.svg"
                  alt="Star Icon"
                  className=""
                />
                <img
                  src="./assets/images/line-md_star-filled.svg"
                  alt="Star Icon"
                  className=""
                />
                <img
                  src="./assets/images/line-md_star-filled.svg"
                  alt="Star Icon"
                  className=""
                />
              </div>
            </div>
            <span className="text-sm font-semibold leading-7 pb-4">
              {testimonials[currentIndex].testimonialsDesc}
            </span>
            <span> {testimonials[currentIndex].names} </span>
            <span className="text-[#FF623E] pb-2.5">
              {testimonials[currentIndex].jobPosition}
            </span>
            <div className="flex justify-center items-center">
              <img
                src={testimonials[currentIndex].profileImage}
                className="w-16 mb-6.5"
              />
            </div>
          </div>

          {/*<!--3rd items-->*/}
          <div className="order-3 object-cover transition-all duration-500 flex flex-col justify-center text-center w-98.25 shrink-0 md:max-w-148.5 rounded-2xl border border-slate-200 shadow bg-[#FAFAFA] dark:bg-[#0A0D12]">
            <div className="pb-3 pt-4 relative">
              <img
                src="./assets/images/tdesign_quote-filled.svg"
                alt="Quote Icon"
                className="w-16 absolute -top-9 left-3 z-1"
              />
              <div className="relative flex flex-row justify-center items-center">
                <img
                  src="./assets/images/line-md_star-filled.svg"
                  alt="Star Icon"
                  className=""
                />
                <img
                  src="./assets/images/line-md_star-filled.svg"
                  alt="Star Icon"
                  className=""
                />
                <img
                  src="./assets/images/line-md_star-filled.svg"
                  alt="Star Icon"
                  className=""
                />
                <img
                  src="./assets/images/line-md_star-filled.svg"
                  alt="Star Icon"
                  className=""
                />
                <img
                  src="./assets/images/line-md_star-filled.svg"
                  alt="Star Icon"
                  className=""
                />
              </div>
            </div>
            <span className="text-sm font-semibold leading-7 pb-4">
              {currentIndex === testimonials.length - 1
                ? testimonials[0].testimonialsDesc
                : testimonials[currentIndex + 1].testimonialsDesc}
            </span>
            <span>
              {" "}
              {currentIndex === testimonials.length - 1
                ? testimonials[0].names
                : testimonials[currentIndex + 1].names}{" "}
            </span>
            <span className="text-[#FF623E] pb-2.5">
              {currentIndex === testimonials.length - 1
                ? testimonials[0].jobPosition
                : testimonials[currentIndex + 1].jobPosition}
            </span>
            <div className="flex justify-center items-center">
              <img
                src={
                  currentIndex === testimonials.length - 1
                    ? testimonials[0].profileImage
                    : testimonials[currentIndex + 1].profileImage
                }
                className="w-16 mb-6.5"
              />
            </div>
          </div>
        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 z-5 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full hover:bg-black cursor-pointer"
        >
          ❮
        </button>
        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 z-5 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full hover:bg-black cursor-pointer"
        >
          ❯
        </button>
        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentIndex(index)}
              className={`cursor-pointer h-2 w-2 md:h-3 md:w-3 rounded-full ${
                index === currentIndex
                  ? "bg-[#FF623E]"
                  : "bg-black dark:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
