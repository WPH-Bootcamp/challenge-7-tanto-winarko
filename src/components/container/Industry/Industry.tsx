import { useState } from "react";

const industry = [
  {
    name: "Fintech",
    desc: "We build secure, scalable, and compliant fintech solutions — from digital wallets to core banking systems — tailored to modern financial needs.",
    image: (
      <img
        id="imageFintech"
        src="./assets/images/Industry Image Fintech.svg"
        alt="Fintech"
        className="w-210"
      />
    ),
  },
  {
    name: "E-Commerce",
    desc: "Boost your online sales with fast, reliable platforms designed for seamless shopping experiences, inventory management, and payment integration.",
    image: (
      <img
        id="imageECommerce"
        src="./assets/images/Industry Image E-commerce.svg"
        alt="E-Commerce"
        className="w-210"
      />
    ),
  },
  {
    name: "Healthcare",
    desc: "Empowering healthcare providers with digital solutions that improve patient care, ensure data privacy, and streamline operational workflows.",
    image: (
      <img
        id="imageHealthcare"
        src="./assets/images/Industry Image Healthcare.svg"
        alt="Healthcare"
        className="w-210"
      />
    ),
  },
];

const Industry = () => {
  const [activeIndustry, setActiveIndustry] = useState(0);

  return (
    <section>
      <div className="flex flex-col justify-center items-center text-center p-[5vw]">
        <div className="flex flex-col justify-center items-center text-left w-90.25 md:w-auto">
          <span className="flex flex-col text-left gap-2.75 py-10 w-full">
            <span className="text-3xl font-bold flex text-left">
              Built For Your Industry
            </span>
            <span className="descSection text-left text-[#717680] dark:text-[#a4a7ae]">
              We’ve helped companies across industries launch smarter, faster,
              and more securely.
            </span>
          </span>
          <div className="flex justify-center items-center text-center">
            <div className="w-full flex flex-col justify-center items-start text-center md:flex-row">
              <div className="flex-1">
                {industry.map((industryValue, index) => (
                  <div
                    className={`flex flex-row text-left gap-1 pb-3 cursor-pointer ${
                      activeIndustry === index
                        ? "text-[#0A0D12]"
                        : "text-[#AAAAAA]"
                    }`}
                    id={industryValue.name}
                    onClick={() => setActiveIndustry(index)}
                  >
                    <div className="relative">
                      <img
                        className="h-8"
                        src={
                          activeIndustry === index
                            ? "./assets/images/Frame-active.svg"
                            : "./assets/images/Frame-inactive-lightmode.svg"
                        }
                      />
                    </div>
                    <span
                      className={
                        activeIndustry === index
                          ? "font-bold leading-8 text-base md:text-xl dark:text-white"
                          : "font-bold leading-8 text-base md:text-xl text-[#AAAAAA] dark:text-[#535862]"
                      }
                    >
                      {industryValue.name}
                    </span>
                  </div>
                ))}
              </div>
              <div
                className="relative flex flex-2 flex-col justify-center items-center"
                id={industry[activeIndustry].name}
              >
                <span
                  id="descFintech"
                  className="flex text-left text-sm leading-7 font-medium pb-5"
                >
                  {industry[activeIndustry].desc}
                </span>
                {industry[activeIndustry].image}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industry;
