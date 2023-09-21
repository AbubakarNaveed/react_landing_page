import React from "react";

const Trusted = () => {
  return (
    <div
      name="about"
      className="w-full max-w-[1200px] h-[80vh] bg-cardWhite mx-auto px-2 sm:h-[100vh]"
    >
      <div className="flex flex-col items-center justify-center w-full h-full gap-10 sm:gap-5">
        <h1 className="text-4xl font-bold sm:text-2xl sm:text-center">
          Trusted by developer all around the world
        </h1>
        <p className="text-lg text-center sm:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          laoreet, tortor at volutpat tincidunt, lacus urna aliquam orci,
          interdum vestibulum libero purus eu nulla. Nam sed elit diam.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames .
        </p>
        <div className="flex flex-wrap items-center content-center justify-center gap-10">
          <div className="p-5 rounded-lg bg-whiteText drop-shadow-xl w-[250px] flex items-center flex-col sm:p-3">
            <div>
              <p className="text-4xl font-bold text-cobalt sm:text-3xl">102k</p>
              <p className="text-lg text-lightBlack sm:text-base">Users</p>
            </div>
          </div>
          <div className="p-5 rounded-lg bg-whiteText drop-shadow-xl w-[250px] flex items-center flex-col  sm:p-3">
            <div>
              <p className="text-4xl font-bold text-cobalt sm:text-3xl">24/7</p>
              <p className="text-lg text-lightBlack sm:text-base">Service</p>
            </div>
          </div>
          <div className="p-5 rounded-lg bg-whiteText drop-shadow-xl w-[250px] flex items-center flex-col  sm:p-3">
            <div>
              <p className="text-4xl font-bold text-cobalt sm:text-3xl">
                998PB
              </p>
              <p className="text-lg text-lightBlack sm:text-base">Storage</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
