const FeedbackForm = () => {
  return (
    <section id="feedbackForm" className="w-full align-middle">
      <div className="flex flex-col w-[361px] md:w-[720px] align-middle mt-10 mx-auto">
        <span className="flex flex-col text-center gap-4 pt-10 pb-6 w-90.25 md:w-full">
          <span className="text-[28px] leading-9.5 font-bold">
            Ready to Start? Let’s Talk.
          </span>
          <span className="text-[14px] text-[#a4a7ae] font-medium leading-7">
            Tell us what you need, and we’ll get back to you soon.
          </span>
        </span>

        <div className="w-90.25 md:w-full">
          <form>
            <div className="flex flex-col gap-5 text-left mb-10">
              <div className="flex flex-col gap-1.5 text-left">
                <label
                  htmlFor="name"
                  className="text-[14px] font-bold leading-7"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="   Enter Your Name"
                  className="rounded-[12px] border border-[#252B37] h-12 w-full text-sm"
                />
              </div>
              <div className="flex flex-col gap-[6px] text-left">
                <label
                  htmlFor="email"
                  className="text-[14px] font-bold leading-7"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="   Enter Your Email"
                  className="rounded-[12px] border border-[#252B37] h-12 w-full text-sm"
                />
              </div>
              <div className="flex flex-col gap-[6px] text-left">
                <label
                  htmlFor="message"
                  className="text-[14px] font-bold leading-7"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="   Enter Your Message"
                  className="rounded-xl border border-[#252B37] h-[134px] w-full text-sm"
                ></textarea>
              </div>
              <span className="text-sm text-left font-bold leading-7">
                Services
              </span>
              <div className="flex flex-col md:flex-row text-left gap-[14px]">
                <div className="flex flex-col md:flex-1 md:flex-col space-y-4">
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="bg-[#FF623E] size-5" />
                    <span className="text-sm ml-2 font-medium leading-7">
                      Web Development
                    </span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="bg-[#FF623E] size-5" />
                    <span className="text-sm ml-2 font-medium leading-7">
                      Mobile App Development
                    </span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="bg-[#FF623E] size-5" />
                    <span className="text-sm ml-2 font-medium leading-7">
                      UI/UX Design
                    </span>
                  </label>
                </div>
                <div className="flex flex-col md:flex-2 md:flex-col  space-y-4">
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="bg-[#FF623E] size-5" />
                    <span className="text-sm ml-2 font-medium leading-7">
                      Cloud Solutions
                    </span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="checkbox" className="bg-[#FF623E] size-5" />
                    <span className="text-sm ml-2 font-medium leading-7">
                      Software Development
                    </span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="text-[#FF623E] bg-white checked:bg-[#FF623E] focus:ring-offset-amber-500 size-5 rounded-sm"
                    />
                    <span className="text-sm ml-2 font-medium leading-7">
                      Other
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <input
              type="button"
              value="Send"
              className="mt-4 h-11 w-full font-bold text-base bg-[#FF623E] text-white rounded-full"
              id="sendButton"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default FeedbackForm;
