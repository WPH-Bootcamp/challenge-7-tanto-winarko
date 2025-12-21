const Experiences = () => {
  return (
    <section className="scroll-mt-20 py-24" id="experiences">
      <div className="flex flex-col justify-center items-center text-center">
        <span className="flex flex-col justify-center gap-4 pt-20 pb-6 px-4 w-90.25 md:w-auto">
          <span className="text-[28px] leading-9.5 font-bold">
            End-to-End IT Solutions That Drive Results
          </span>
          <span className="descSection text-[#717680] dark:text-[#a4a7ae]">
            From strategy to execution, we deliver solutions that grow your
            business.
          </span>
        </span>
        <div className="flex flex-col justify-center items-center text-center">
          <div className="grid grid-cols-2 justify-center items-center text-center gap-4 md:flex md:flex-row">
            <div className="rounded-full size-[172.5px] bg-[#FAFAFA] dark:bg-[#0A0D12] flex flex-col justify-center items-center gap-y-1 border border-[#181D27]">
              <span className="text-[#FF623E] text-4xl font-bold">50+</span>
              <span className="text-sm font-semibold leading-7">
                Projects Delivered
              </span>
            </div>
            <div className="rounded-full size-[172.5px] bg-[#FAFAFA] dark:bg-[#0A0D12] flex flex-col justify-center items-center gap-y-1 border border-[#181D27]">
              <span className="text-[#FF623E] text-4xl font-bold">5+</span>
              <span className="text-sm font-semibold leading-7">
                Years of Experience
              </span>
            </div>

            <div className="rounded-full size-[172.5px] bg-[#FAFAFA] dark:bg-[#0A0D12] flex flex-col justify-center items-center gap-y-1 border border-[#181D27]">
              <span className="text-[#FF623E] text-4xl font-bold">10+</span>
              <span className="text-sm font-semibold leading-7">
                Industry Awards Won
              </span>
            </div>
            <div className="rounded-full size-[172.5px] bg-[#FAFAFA] dark:bg-[#0A0D12] flex flex-col justify-center items-center gap-y-1 border border-[#181D27]">
              <span className="text-[#FF623E] text-4xl font-bold">100%</span>
              <span className="text-sm font-semibold leading-7">
                Client Satisfaction Rate
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
