import React from "react";
import Cover from "./cover2.jpg";
import { BsTelephone, BsCpu } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { SlWrench } from "react-icons/sl";
const Service = () => {
  return (
    <div name="support" className="relative w-full">
      <div className="w-full h-[700px] bg-berry absolute">
        <img
          src={Cover}
          className="top-0 object-cover w-full h-full opacity-25"
          alt="office_people"
        />
      </div>
      <div className="w-full max-w-[1200px] mx-auto px-2 h-full flex flex-col justify-between items-center">
        <div className="relative flex flex-col w-full h-full gap-2 pt-24 text-center text-whiteText">
          <h1 className="text-4xl font-bold">SUPPORT</h1>
          <h2 className="text-2xl font-extrabold">Finding the right team</h2>
          <h3 className="text-xl font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            laoreet, tortor at volutpat tincidunt, lacus urna aliquam orci,
            interdum vestibulum libero purus eu nulla. Nam sed elit diam.
          </h3>
        </div>
        <div className="relative mt-[320px] z-1 grid w-full grid-cols-3 gap-4 md:grid-cols-1 p-2 md:gap-20">
          <div className="flex flex-col p-0 rounded-md bg-whiteText drop-shadow-lg">
            <div className="bg-cobalt w-[50px] h-[50px] text-whiteText rounded-xl drop-shadow-xl flex items-center justify-center mt-[-30px] ml-[16px]">
              <BsTelephone style={{ fontSize: "25px" }} />
            </div>
            <div className="mt-[20px] flex flex-col gap-4">
              <div className="px-[18px]">
                <h1 className="text-lg font-bold">Sales</h1>
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  laoreet, tortor at volutpat tincidunt,
                </h3>
              </div>
              <div className="w-full  h-[40px] flex items-center bg-lightGray text-cobalt">
                <div className="px-[18px] font-bold flex items-center gap-2">
                  Contact
                  <AiOutlineArrowRight />
                </div>
              </div>

              {/* <div className="w-full bg-cobalt h-[35px] text-whiteText font-bold px-[18px] text-lg ro">
                <div>
                  <h2>Contact</h2>
                  <AiOutlineArrowRight />
                </div>
              </div> */}
            </div>
          </div>
          <div className="flex flex-col p-0 rounded-xl bg-whiteText drop-shadow-lg">
            <div className="bg-cobalt w-[50px] h-[50px] text-whiteText rounded-xl drop-shadow-xl flex items-center justify-center mt-[-30px] ml-[16px]">
              <BsCpu style={{ fontSize: "25px" }} />
            </div>
            <div className="mt-[20px] flex flex-col gap-4">
              <div className="px-[18px]">
                <h1 className="text-lg font-bold">Media Inquiries</h1>
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  laoreet, tortor at volutpat tincidunt,
                </h3>
              </div>
              <div className="w-full bg-lightGray h-[40px] flex items-center">
                <div className="px-[18px] text-cobalt font-bold flex items-center gap-2">
                  Contact
                  <AiOutlineArrowRight />
                </div>
              </div>

              {/* <div className="w-full bg-cobalt h-[35px] text-whiteText font-bold px-[18px] text-lg ro">
                <div>
                  <h2>Contact</h2>
                  <AiOutlineArrowRight />
                </div>
              </div> */}
            </div>
          </div>
          <div className="flex flex-col p-0 rounded-xl bg-whiteText drop-shadow-lg">
            <div className="bg-cobalt w-[50px] h-[50px] text-whiteText rounded-xl drop-shadow-xl flex items-center justify-center mt-[-30px] ml-[16px]">
              <SlWrench style={{ fontSize: "25px" }} />
            </div>
            <div className="mt-[20px] flex flex-col gap-4">
              <div className="px-[18px]">
                <h1 className="text-lg font-bold">Technical Support</h1>
                <h3>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  laoreet, tortor at volutpat tincidunt,
                </h3>
              </div>
              <div className="w-full bg-lightGray h-[40px] flex items-center">
                <div className="px-[18px] text-cobalt font-bold flex items-center gap-2">
                  Contact
                  <AiOutlineArrowRight />
                </div>
              </div>

              {/* <div className="w-full bg-cobalt h-[35px] text-whiteText font-bold px-[18px] text-lg ro">
                <div>
                  <h2>Contact</h2>
                  <AiOutlineArrowRight />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
