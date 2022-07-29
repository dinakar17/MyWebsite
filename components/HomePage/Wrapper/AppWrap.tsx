import React from "react";
import NavigationDots from "./NavigationDots";
import SocialMedia from "./SocialMedia";

const AppWrap = (Component: React.FC, idName: string, classNames: string) =>
  function HOC() {
    return (
      <div id={idName} className="min-h-screen flex w-full">
        <SocialMedia />
        {/* Problem here without w-full*/}
        <div className="w-full">
          <Component />
          {/* <div className="text-right text-sm font-extralight">
            <p>@2022 Dinakar</p>
            <p>All rights reserved</p>
          </div> */}
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
