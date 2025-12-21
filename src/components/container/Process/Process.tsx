import { useState } from "react";

/*type ProcessType = {
  title: string;
  desc: string;
};

const processes: ProcessType[] = [
  {
    title: "Discovery & Consultation",
    desc: "Understand Your Needs and Goals",
  },
  {
    title: "Planning & Strategy",
    desc: "Build a Clear, Scalable Roadmap",
  },
  {
    title: "Design & Prototyping",
    desc: "Craft UX That Converts",
  },
  {
    title: "Development & Implementation",
    desc: "Deliver With Speed & Precision",
  },
  {
    title: "Testing & Optimization",
    desc: "Ensure Quality at Every Step",
  },
  {
    title: "Launch & Growth",
    desc: "Scale, Measure & Improve Continuously",
  },
];*/

const Process = () => {
  const [activeProcess1, setActiveProcess1] = useState(false);
  const [activeProcess2, setActiveProcess2] = useState(false);
  const [activeProcess3, setActiveProcess3] = useState(false);
  const [activeProcess4, setActiveProcess4] = useState(false);
  const [activeProcess5, setActiveProcess5] = useState(false);
  const [activeProcess6, setActiveProcess6] = useState(false);

  return (
    <section>
      <div className="flex flex-col justify-center items-center text-center">
        <div className="pb-10 w-[80vw] md:w-auto">
          <span className="flex flex-col text-center gap-2.75 pt-10 pb-6">
            <p className="text-3xl font-bold">Our Process</p>
            <p className="descSection text-[#717680] dark:text-[#a4a7ae]">
              Clear steps. Smart execution. Results you can count on.
            </p>
          </span>
        </div>
        <div className="flex justify-center items-center px-3 md:w-screen">
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {/*<!-- 1st Block of Our Process Section -->*/}
            <div className="relative flex items-center justify-between gap-3 md:justify-normal md:odd:flex-row md:-translate-x-[calc(50%-20px)] group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1">
                <div className="rounded-full size-10 bg-[#ff623E] flex justify-center items-center">
                  <span className="flex justify-center items-center text-center text-white text-xs font-bold leading-6">
                    1
                  </span>
                </div>
              </div>
              <div className="w-full bg-[#FAFAFA] dark:bg-[#0A0D12] p-4 rounded-2xl border border-slate-200 shadow">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold">Discovery & Consultation</div>
                  <div
                    className="relative cursor-pointer"
                    id="showHideBtnOurProcess1"
                    onClick={() => setActiveProcess1(!activeProcess1)}
                  >
                    <img
                      src={`${
                        activeProcess1
                          ? "./assets/images/chevron-up-darkmode.svg"
                          : "./assets/images/chevron-down-darkmode.svg"
                      }`}
                      className={`w-6 relative invisible dark:visible`}
                      id="chevronDark1"
                    />
                    <img
                      src={`${
                        activeProcess1
                          ? "./assets/images/chevron-up-lightmode.svg"
                          : "./assets/images/chevron-down-lightmode.svg"
                      }`}
                      className={`w-6 absolute top-0 visible dark:invisible`}
                      id="chevronLight1"
                    />
                  </div>
                </div>
                <div
                  className={`text-sm text-slate-500 dark:text-[#A4A7AE] text-left ${
                    activeProcess1 === true ? "visible" : "hidden"
                  }`}
                  id="descOurProcess1"
                >
                  Understand Your Needs and Goals
                </div>
              </div>
            </div>

            {/*<!-- 2nd Block of Our Process Section -->*/}
            <div className="relative flex items-center justify-between gap-3 md:justify-normal md:even:flex-row-reverse md:translate-x-[calc(50%-20px)] group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1">
                <div className="rounded-full size-10 bg-[#ff623E] flex justify-center items-center">
                  <span className="flex justify-center items-center text-center text-white text-xs font-bold leading-6">
                    2
                  </span>
                </div>
              </div>
              <div className="w-full bg-[#FAFAFA] dark:bg-[#0A0D12] p-4 rounded-2xl border border-slate-200 shadow">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold">Planning & Strategy</div>
                  <div
                    className="relative cursor-pointer"
                    id="showHideBtnOurProcess2"
                    onClick={() => setActiveProcess2(!activeProcess2)}
                  >
                    <img
                      src={`${
                        activeProcess2
                          ? "./assets/images/chevron-up-darkmode.svg"
                          : "./assets/images/chevron-down-darkmode.svg"
                      }`}
                      className={`w-6 relative invisible dark:visible`}
                      id="chevronDark2"
                    />
                    <img
                      src={`${
                        activeProcess2
                          ? "./assets/images/chevron-up-lightmode.svg"
                          : "./assets/images/chevron-down-lightmode.svg"
                      }`}
                      className={`w-6 absolute top-0 visible dark:invisible`}
                      id="chevronLight2"
                    />
                  </div>
                </div>
                <div
                  className={`text-sm text-slate-500 dark:text-[#A4A7AE] text-left ${
                    activeProcess2 === true ? "visible" : "hidden"
                  }`}
                  id="descOurProcess2"
                >
                  Build a Clear, Scalable Roadmap
                </div>
              </div>
            </div>

            {/*<!-- 3rd Block of Our Process Section -->*/}
            <div className="relative flex items-center justify-between gap-3 md:justify-normal md:odd:flex-row md:-translate-x-[calc(50%-20px)] group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full group-[.is-active]:bg-emerald-500 text-white group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1">
                <div className="rounded-full size-10 bg-[#ff623E] flex justify-center items-center">
                  <span className="flex justify-center items-center text-center text-white text-xs font-bold leading-6">
                    3
                  </span>
                </div>
              </div>
              <div className="w-full bg-[#FAFAFA] dark:bg-[#0A0D12] p-4 rounded-2xl border border-slate-200 shadow">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold">Design & Prototyping</div>
                  <div
                    className="relative cursor-pointer"
                    id="showHideBtnOurProcess3"
                    onClick={() => setActiveProcess3(!activeProcess3)}
                  >
                    <img
                      src={`${
                        activeProcess3
                          ? "./assets/images/chevron-up-darkmode.svg"
                          : "./assets/images/chevron-down-darkmode.svg"
                      }`}
                      className={`w-6 relative invisible dark:visible`}
                      id="chevronDark3"
                    />
                    <img
                      src={`${
                        activeProcess3
                          ? "./assets/images/chevron-up-lightmode.svg"
                          : "./assets/images/chevron-down-lightmode.svg"
                      }`}
                      className={`w-6 absolute top-0 visible dark:invisible`}
                      id="chevronLight3"
                    />
                  </div>
                </div>
                <div
                  className={`text-sm text-slate-500 dark:text-[#A4A7AE] text-left ${
                    activeProcess3 === true ? "visible" : "hidden"
                  }`}
                  id="descOurProcess3"
                >
                  Craft UX That Converts
                </div>
              </div>
            </div>

            {/*<!-- 4th Block of Our Process Section -->*/}
            <div className="relative flex items-center justify-between gap-3 md:justify-normal md:even:flex-row-reverse md:translate-x-[calc(50%-20px)] group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full group-[.is-active]:bg-emerald-500 text-white group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1">
                <div className="rounded-full size-10 bg-[#ff623E] flex justify-center items-center">
                  <span className="flex justify-center items-center text-center text-white text-xs font-bold leading-6">
                    4
                  </span>
                </div>
              </div>
              <div className="w-full bg-[#FAFAFA] dark:bg-[#0A0D12] p-4 rounded-2xl border border-slate-200 shadow">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold">Development & Implementation</div>
                  <div
                    className="relative cursor-pointer"
                    id="showHideBtnOurProcess4"
                    onClick={() => setActiveProcess4(!activeProcess4)}
                  >
                    <img
                      src={`${
                        activeProcess4
                          ? "./assets/images/chevron-up-darkmode.svg"
                          : "./assets/images/chevron-down-darkmode.svg"
                      }`}
                      className={`w-6 relative invisible dark:visible`}
                      id="chevronDark4"
                    />
                    <img
                      src={`${
                        activeProcess4
                          ? "./assets/images/chevron-up-lightmode.svg"
                          : "./assets/images/chevron-down-lightmode.svg"
                      }`}
                      className={`w-6 absolute top-0 visible dark:invisible`}
                      id="chevronLight4"
                    />
                  </div>
                </div>
                <div
                  className={`text-sm text-slate-500 dark:text-[#A4A7AE] text-left ${
                    activeProcess4 === true ? "visible" : "hidden"
                  }`}
                  id="descOurProcess4"
                >
                  Build a Clear, Scalable Roadmap
                </div>
              </div>
            </div>

            {/*<!-- 5th Block of Our Process Section -->*/}
            <div className="relative flex items-center justify-between gap-3 md:justify-normal md:odd:flex-row md:-translate-x-[calc(50%-20px)] group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full group-[.is-active]:bg-emerald-500 text-white group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1">
                <div className="rounded-full size-10 bg-[#ff623E] flex justify-center items-center">
                  <span className="flex justify-center items-center text-center text-white text-xs font-bold leading-6">
                    5
                  </span>
                </div>
              </div>
              <div className="w-full bg-[#FAFAFA] dark:bg-[#0A0D12] p-4 rounded-2xl border border-slate-200 shadow">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold">Testing & Optimization</div>
                  <div
                    className="relative cursor-pointer"
                    id="showHideBtnOurProcess5"
                    onClick={() => setActiveProcess5(!activeProcess5)}
                  >
                    <img
                      src={`${
                        activeProcess5
                          ? "./assets/images/chevron-up-darkmode.svg"
                          : "./assets/images/chevron-down-darkmode.svg"
                      }`}
                      className={`w-6 relative invisible dark:visible`}
                      id="chevronDark5"
                    />
                    <img
                      src={`${
                        activeProcess5
                          ? "./assets/images/chevron-up-lightmode.svg"
                          : "./assets/images/chevron-down-lightmode.svg"
                      }`}
                      className={`w-6 absolute top-0 visible dark:invisible`}
                      id="chevronLight5"
                    />
                  </div>
                </div>
                <div
                  className={`text-sm text-slate-500 dark:text-[#A4A7AE] text-left ${
                    activeProcess5 === true ? "visible" : "hidden"
                  }`}
                  id="descOurProcess5"
                >
                  Ensure Quality at Every Step
                </div>
              </div>
            </div>

            {/*<!-- 6th Block of Our Process Section -->*/}
            <div className="relative flex items-center justify-between gap-3 md:justify-normal md:even:flex-row-reverse md:translate-x-[calc(50%-20px)] group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full group-[.is-active]:bg-emerald-500 text-white group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1">
                <div className="rounded-full size-10 bg-[#ff623E] flex justify-center items-center">
                  <span className="flex justify-center items-center text-center text-white text-xs font-bold leading-6">
                    6
                  </span>
                </div>
              </div>
              <div className="w-full bg-[#FAFAFA] dark:bg-[#0A0D12] p-4 rounded-2xl border border-slate-200 shadow">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <div className="font-bold">Launch & Growth</div>
                  <div
                    className="relative cursor-pointer"
                    id="showHideBtnOurProcess6"
                    onClick={() => setActiveProcess6(!activeProcess6)}
                  >
                    <img
                      src={`${
                        activeProcess6
                          ? "./assets/images/chevron-up-darkmode.svg"
                          : "./assets/images/chevron-down-darkmode.svg"
                      }`}
                      className={`w-6 relative invisible dark:visible`}
                      id="chevronDark6"
                    />
                    <img
                      src={`${
                        activeProcess6
                          ? "./assets/images/chevron-up-lightmode.svg"
                          : "./assets/images/chevron-down-lightmode.svg"
                      }`}
                      className={`w-6 absolute top-0 visible dark:invisible`}
                      id="chevronLight6"
                    />
                  </div>
                </div>
                <div
                  className={`text-sm text-slate-500 dark:text-[#A4A7AE] text-left ${
                    activeProcess6 === true ? "visible" : "hidden"
                  }`}
                  id="descOurProcess6"
                >
                  Scale, Measure & Improve Continuously
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<!--End of Block Our Process Section-->*/}
      </div>
    </section>
  );
};

export default Process;
