import React from "react";

function LeftSider() {
  return (
    <div className="fixed left-0 bottom-0 px-10 sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="https://www.facebook.com">
            <i className="ri-facebook-circle-line text-gray-600 ri-3x"></i>
          </a>
          <a href="https://www.github.com">
            <i className="ri-github-line text-gray-600 ri-3x"></i>
          </a>
          <a href="https://www.linkedin.com/in/jay-parikh-529450194">
            <i className="ri-linkedin-box-line text-gray-600 ri-3x"></i>
          </a>
        </div>
        <div className="w-[3px] h-32 bg-gray-600 sm:hidden"></div>
      </div>
    </div>
  );
}

export default LeftSider;
