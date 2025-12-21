import React from "react";

const Popup = () => {
  return (
    <div
      id="successNotification"
      className="fixed backdrop-brightness-70 rounded-3xl bg-[#fafafa] dark:bg-[#0A0D12] flex-col justify-center items-center top-[25%] left-[38%] w-[353px] h-[374px] inset-0 bg-opacity-75 shadow-lg z-10 hidden"
    >
      <div className="flex justify-center items-center text-center">
        <img
          src="./assets/images/Notif-Success.svg"
          alt="Success Notification"
        />
      </div>
      <div className="bg-white dark:bg-black flex rounded-3xl flex-col justify-center items-center text-center">
        <p className="font-bold text-black dark:text-[#fdfdfd]">
          Message Received!
        </p>
        <p className="text-[#717680] dark:text-[#A4A7AE]">
          Thanks for reaching out — we’ll get back to you as soon as possible.
        </p>
        <br />
        <a
          href="#"
          className="rounded-full w-[80%] flex justify-center items-center text-center bg-[#FF623E] ml-4 text-white h-11"
        >
          <button id="closeSendButton">Back to Home</button>
        </a>
        <br />
      </div>
    </div>
  );
};

export default Popup;
