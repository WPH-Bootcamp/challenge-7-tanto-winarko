const adobe = "./assets/images/Adobe.svg";
const upwork = "./assets/images/Upwork.svg";
const zoom = "./assets/images/Zoom.svg";
const postman = "./assets/images/Postman.svg";
const databricks = "./assets/images/Databricks.svg";
const airbnb = "./assets/images/Airbnb.svg";
const dropbox = "./assets/images/Dropbox.svg";
const paypal = "./assets/images/Paypal.svg";
const netflix = "./assets/images/Netflix.svg";

const TrustedPartner = () => {
  return (
    <div>
      <br />
      <span className="flex justify-center text-base font-bold mb-7">
        Trusted by Global Innovators & Leading Brands
      </span>
      {/*<marquee class="mix-blend-luminosity">*/}
      {/*<!--Gradient Layout Transparent-->*/}
      <div className="absolute -left-px z-2 h-100 md:h-80 w-[35%] bg-linear-to-r from-white dark:from-black to-transparent md:visible"></div>
      <div className="absolute right-px z-2 h-100 md:h-80 w-[35%] bg-linear-to-l from-white dark:from-black to-transparent md:visible"></div>

      <div className="mix-blend-luminosity flex justify-center gap-x-12 py-11 overflow-x-hidden">
        <img src={adobe} alt="Adobe Logo" className="flex items-center" />
        <img src={upwork} alt="Upwork Logo" className="flex items-center" />
        <img src={zoom} alt="Zoom Logo" className="flex items-center" />
        <img src={postman} alt="Postman Logo" className="flex items-center" />
        <img
          src={databricks}
          alt="Databricks Logo"
          className="flex items-center"
        />
        <img src={airbnb} alt="Airbnb Logo" className="flex items-center" />
        <img src={dropbox} alt="Dropbox Logo" className="flex items-center" />
        <img src={paypal} alt="Paypal Logo" className="flex items-center" />
        <img src={netflix} alt="Netflix Logo" className="flex items-center" />
      </div>
      {/*</marquee>*/}
    </div>
  );
};

export default TrustedPartner;
