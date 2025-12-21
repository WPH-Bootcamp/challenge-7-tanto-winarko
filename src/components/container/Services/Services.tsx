const Services = () => (
  <section id="services">
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center text-center">
        <span className="flex flex-col justify-center items-center text-center gap-2.75 py-10 w-90.25 md:w-auto">
          <span className="text-3xl font-bold">
            Smart IT Solutions That Grow With You
          </span>
          <span className="descSection text-[#717680] dark:text-[#a4a7ae]">
            Tailored tech to boost efficiency, security, and results.
          </span>
        </span>
      </div>
      <div className="gap-10 flex flex-col justify-center items-center text-center w-auto pb-10 md:grid md:grid-cols-2 md:gap-5 lg:grid-cols-3 lg:gap-2.5">
        <div className="sizeBoxSolutions md:w-86.25 md:h-43.75 lg:w-81.25 rounded-2xl border border-[#181D27] bg-[#FAFAFA] dark:bg-[#0A0D12] px-5 flex flex-col gap-1">
          <img
            src="./assets/images/Icon-1.svg"
            alt="Icon-1"
            className="w-16 -top-6 relative z-1"
          />
          <span className="titleBlock">Web Development</span>
          <span className="descBlock text-[#717680] dark:text-[#a4a7ae]">
            Build fast, scalable, and SEO-friendly websites.
          </span>
        </div>
        <div className="sizeBoxSolutions md:w-86.25 md:h-43.75 lg:w-81.25 rounded-2xl border border-[#181D27] bg-[#FAFAFA] dark:bg-[#0A0D12] px-5 flex flex-col gap-1">
          <img
            src="./assets/images/Icon-2.svg"
            alt="Icon-2"
            className="w-16 -top-6 relative z-1"
          />
          <span className="titleBlock">Mobile App Development</span>
          <span className="descBlock text-[#717680]">
            Native & cross-platform apps tailored to user needs.
          </span>
        </div>
        <div className="sizeBoxSolutions md:w-86.25 md:h-43.75 lg:w-81.25 rounded-2xl border border-[#181D27] bg-[#FAFAFA] dark:bg-[#0A0D12] px-5 flex flex-col gap-1">
          <img
            src="./assets/images/Icon-3.svg"
            alt="Icon-3"
            className="w-16 -top-6 relative z-1"
          />
          <span className="titleBlock">UI/UX Design</span>
          <span className="descBlock text-[#717680]">
            Delight users with intuitive and beautiful interfaces
          </span>
        </div>
        <div className="sizeBoxSolutions md:w-86.25 md:h-43.75 lg:w-81.25 rounded-2xl border border-[#181D27] bg-[#FAFAFA] dark:bg-[#0A0D12] px-5 flex flex-col gap-1">
          <img
            src="./assets/images/Icon-4.svg"
            alt="Icon-4"
            className="w-16 -top-6 relative z-1"
          />
          <span className="titleBlock">Cloud Solutions</span>
          <span className="descBlock text-[#717680]">
            Secure and flexible cloud infrastructure for your growth.
          </span>
        </div>
        <div className="sizeBoxSolutions md:w-86.25 md:h-43.75 lg:w-81.25 rounded-2xl border border-[#181D27] bg-[#FAFAFA] dark:bg-[#0A0D12] px-5 flex flex-col gap-1">
          <img
            src="./assets/images/Icon-5.svg"
            alt="Icon-5"
            className="w-16 -top-6 relative z-1"
          />
          <span className="titleBlock">Software Development</span>
          <span className="descBlock text-[#717680]">
            Custom solutions built around your business logic.
          </span>
        </div>
        <div className="sizeBoxSolutions md:w-86.25 md:h-43.75 lg:w-81.25 rounded-2xl border border-[#181D27] bg-[#FAFAFA] dark:bg-[#0A0D12] px-5 flex flex-col gap-1">
          <img
            src="./assets/images/Icon-6.svg"
            alt="Icon-6"
            className="w-16 -top-6 relative z-1"
          />
          <span className="titleBlock">IT infrastructure</span>
          <span className="descBlock text-[#717680]">
            Scale your backend with reliable tech foundations.
          </span>
        </div>
        <div className="sizeBoxSolutions md:w-86.25 md:h-43.75 lg:w-81.25 rounded-2xl border border-[#181D27] bg-[#FAFAFA] dark:bg-[#0A0D12] px-5 flex flex-col gap-1">
          <img
            src="./assets/images/Icon-7.svg"
            alt="Icon-7"
            className="w-16 -top-6 relative z-1"
          />
          <span className="titleBlock">Cyber Security Services</span>
          <span className="descBlock text-[#717680]">
            Stay protected with enterprise-grade security.
          </span>
        </div>
        <div className="sizeBoxSolutions md:w-86.25 md:h-43.75 lg:w-81.25 rounded-2xl border border-[#181D27] bg-[#FAFAFA] dark:bg-[#0A0D12] px-5 flex flex-col gap-1">
          <img
            src="./assets/images/Icon-8.svg"
            alt="Icon-8"
            className="w-16 -top-6 relative z-1"
          />
          <span className="titleBlock">QA Solutions</span>
          <span className="descBlock text-[#717680]">
            Ensure performance with rigorous testing frameworks.
          </span>
        </div>
        <div className="sizeBoxSolutions md:w-86.25 md:h-43.75 lg:w-81.25 rounded-2xl border border-[#181D27] bg-[#FAFAFA] dark:bg-[#0A0D12] px-5 flex flex-col gap-1">
          <img
            src="./assets/images/Icon-9.svg"
            alt="Icon-9"
            className="w-16 -top-6 relative z-1"
          />
          <span className="titleBlock">IT Consulting & Support</span>
          <span className="descBlock text-[#717680]">
            Make smarter tech decisions with expert guidance.
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
