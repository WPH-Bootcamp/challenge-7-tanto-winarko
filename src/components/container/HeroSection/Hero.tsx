import Button from "../../ui/Button";


const hero_light = "./assets/images/Image Hero-lightmode.svg";
const hero_dark = "./assets/images/Image Hero-darkmode.svg";

const Hero = () => {
  return (
    <section id="about" className="w-full px-0 mt-15.25 lg:pl-[140px] md:pr-0 ">
      <div className="container px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left/Top Text Content */}
        <div className="max-w-xl text-left font-bold">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] pb-2">
            Your Tech Partner for
            <br />
            <span className="text-[#ff623e]">Smarter Growth</span>
          </h1>
          <p className="text-base font-semibold text-left mb-10">
            We deliver tailored IT solutions to help you scale with speed and
            confidence.
          </p>
          <Button name="letstalk" label="Let's Talk"></Button>
        </div>

        {/* Image Hero */}
        <div className="relative top-[43px] md:-top-8 md:mr-0 lg:-top-8 ">
          <img
            src={hero_light}
            alt="Hero Image"
            className="w-full md:w-186.75 top-0 relative visible dark:invisible"
          />
          <img
            src={hero_dark}
            alt="Hero Image"
            className="w-full md:w-186.75 top-0 absolute invisible dark:visible"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
