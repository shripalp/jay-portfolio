import React from "react";
import { useSelector } from "react-redux";

function Intro() {
  const { portfolioData } = useSelector((state) => state.root);
  const { intro } = portfolioData;

  const { firstName, lastName, welcomeText, description, caption } = intro;
  return (
    <div className="flex gap-10 py-10 sm:flex-col">
      <div className="w-1/3 text-white">
        <img
          className="rounded-3xl"
          src="https://media.licdn.com/dms/image/C5603AQGUxxWWNXAPnw/profile-displayphoto-shrink_800_800/0/1613076470500?e=2147483647&v=beta&t=5EilmnHRHlFR5hRUA0qrY4GiApNKbpmIZPXA1yC7Z9c"
          alt="myPic"
        />
      </div>
      <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 w-2/3">
        <h1 className="text-white text-2xl font-semibold">
          {welcomeText || ""}
        </h1>
        <h1 className="text-7xl sm:text-3xl text-secondary font-semibold">
          {firstName || ""}
          <span> </span>
          {lastName || ""}
        </h1>
        <h1 className="text-7xl sm:text-3xl text-white font-semibold">
          {caption || ""}
        </h1>

        <p className="text-white text-2xl w-2/3">{description || ""}</p>
      </div>
    </div>
  );
}

export default Intro;
