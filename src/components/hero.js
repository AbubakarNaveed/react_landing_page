import React from "react";
import heroImg from "./Global-Networking-Transparent-Background.png";
import { MdOutlineSecurity } from "react-icons/md";
import { RiDashboardLine } from "react-icons/ri";
import { AiOutlineCloudServer, AiOutlineApi } from "react-icons/ai";

const Hero = () => {
  return (
    <div
      name="home"
      className="w-full h-[100vh] bg-gray flex items-center flex-col justify-center gap-[10px] p-2"
    >
      <div className="">
        <div className="grid h-full smhero:grid-cols-2">
          <div className="flex flex-col items-center justify-center h-full p-4 xsm:p-2">
            <div className="flex flex-col justify-center gap-1">
              <p className="text-2xl xsm:text-xl">
                Unique Sequencing and Production
              </p>
              <h1 className="text-5xl font-bold xsm:text-4xl ">
                Cloud Management
              </h1>
              <p className="text-2xl xsm:text-xl">Our tech is our identity</p>
              <button className="w-full px-1 py-2 text-lg font-bold duration-300 ease-in border-none rounded bg-cobalt text-whiteText hover:bg-black ">
                Get Started
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center  justify-center h-full p-4 sm:p-2 sm:w-[90%] mx-auto">
            <img src={heroImg} alt="network" />
          </div>
        </div>
      </div>
      {/* <div className="w-full max-w-[500px] p-2 z-0">
        <div className="flex flex-col items-center justify-center gap-2 px-5 py-3 rounded-lg bg-lightGray drop-shadow-xl">
          <p className="text-lg font-semibold">Data Services</p>
          <div className=" gap-2 grid grid-cols-2 ">
            <div>
              <div className="flex items-center gap-1 flex-col">
                <MdOutlineSecurity
                  style={{ fontSize: "20px" }}
                  color="#1338BE"
                />
                <p>App Security</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1 flex-col">
                <RiDashboardLine style={{ fontSize: "20px" }} color="#1338BE" />
                <p>Dashboard</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1 flex-col">
                <AiOutlineCloudServer
                  style={{ fontSize: "20px" }}
                  color="#1338BE"
                />
                <p>Cloud Data</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1 flex-col">
                <AiOutlineApi style={{ fontSize: "20px" }} color="#1338BE" />
                <p>API</p>
              </div>
            </div> */}
      {/* <div>
              <p className="flex items-center info:flex-col info:justify-center">
                <RiDashboardLine style={{ fontSize: "20px" }} color="#1338BE" />
                <p className="text-center">Dashboard</p>
              </p>
            </div>
            <div>
              <p className="flex items-center info:flex-col info:justify-center">
                <AiOutlineCloudServer
                  style={{ fontSize: "20px" }}
                  color="#1338BE"
                />
                <p className="text-center"> Cloud Data</p>
              </p>
            </div>
            <div>
              <p className="flex items-center info:flex-col info:justify-center">
                <AiOutlineApi style={{ fontSize: "20px" }} color="#1338BE" />
                <p className="text-center">API</p>
              </p>
            </div> */}
      {/* </div>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
