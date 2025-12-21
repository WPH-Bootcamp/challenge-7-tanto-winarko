const Footer = () => {
  return (
    <footer className="py-6 flex flex-col items-center w-screen md:px-35 md:py-10">
      <div className="bg-[#FAFAFA] dark:bg-[#0A0D12] p-5 gap-6 rounded-3xl border border-[#252B37] w-90.25 md:w-full md:p-10">
        <div className="flex flex-col md:flex-row-reverse md:justify-between">
          <div className="relative">
            <img
              className="w-35 relative visible dark:invisible"
              src="./assets/images/Logo-lightmode.svg"
              alt="Logo"
            />
            <img
              className="w-35 absolute top-0 invisible dark:visible"
              src="./assets/images/Logo-darkmode.svg"
              alt="Logo"
            />
          </div>
          <div className="w-full h-full">
            <p className="text-[26px] font-bold py-6 text-left md:max-w-62.5 md:p-0 md:mb-15 md:flex md:items-start">
              LET'S DISCUSS YOUR IDEAS
            </p>
          </div>
        </div>
        <hr className="border border-[#DFDFDF] dark:border-[#252B37] w-auto" />
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="py-6 flex flex-col md:flex-row md:gap-8 md:mt-5 md:pt-11.25 md:pb-1.25">
            <a className="py-2 text-sm font-medium" href="#">
              About
            </a>
            <a className="py-2 text-sm font-medium" href="#">
              Service
            </a>
            <a className="py-2 text-sm font-medium" href="#">
              Projects
            </a>
            <a className="py-2 text-sm font-medium" href="#">
              Testimonials
            </a>
            <a className="py-2 text-sm font-medium" href="#">
              FAQ
            </a>
          </div>

          <div className="flex flex-row items-center md:mt-5 md:pt-11.25 md:pb-1.25">
            <div className="relative">
              <img
                className="pr-2 relative visible dark:invisible"
                src="./assets/images/Facebook-lightmode.svg"
                alt="Facebook Icon"
              />
              <img
                className="pr-2 absolute top-0 invisible dark:visible"
                src="./assets/images/Facebook-darkmode.svg"
                alt="Facebook Icon"
              />
            </div>
            <div className="relative">
              <img
                className="px-2 relative visible dark:invisible"
                src="./assets/images/Instagram-lightmode.svg"
                alt="Instagram Icon"
              />
              <img
                className="px-2 absolute top-0 invisible dark:visible"
                src="./assets/images/Instagram-darkmode.svg"
                alt="Instagram Icon"
              />
            </div>
            <div className="relative">
              <img
                className="px-2 relative visible dark:invisible"
                src="./assets/images/LinkedIn-lightmode.svg"
                alt="LinkedIn Icon"
              />
              <img
                className="px-2 absolute top-0 invisible dark:visible"
                src="./assets/images/LinkedIn-darkmode.svg"
                alt="LinkedIn Icon"
              />
            </div>
            <div className="relative">
              <img
                className="px-2 relative visible dark:invisible"
                src="./assets/images/TikTok-lightmode.svg"
                alt="TikTok Icon"
              />
              <img
                className="px-2 absolute top-0 invisible dark:visible"
                src="./assets/images/TikTok-darkmode.svg"
                alt="TikTok Icon"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
