import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-black">
      <div className="max-w-[1200px] mx-auto text-whiteText px-8 py-[100px]">
        <div className="grid grid-cols-2 mdburger:grid-cols-6 gap-5 border-b-2 border-whiteText pb-5">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">Solutions</h1>
            <ul className="flex flex-col gap-1 text-lg">
              <li>Marketing</li>
              <li>Analytics</li>
              <li>Commerce</li>
              <li>Data</li>
              <li>Cloud</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">Support</h1>
            <ul className="flex flex-col gap-1 text-lg">
              <li>Pricing</li>
              <li>Documentation</li>
              <li>Guide</li>
              <li>API Status</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">Company</h1>
            <ul className="flex flex-col gap-1 text-lg">
              <li>About</li>
              <li>Blog</li>
              <li>Jobs</li>
              <li>Press</li>
              <li>Patners</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">Legal</h1>
            <ul className="flex flex-col gap-1 text-lg">
              <li>Claims</li>
              <li>Privacy</li>
              <li>Terms</li>
              <li>Policies</li>
              <li>Conditions</li>
            </ul>
          </div>
          <div className="col-span-2 flex flex-col gap-2">
            <div className="text-2xl font-bold">
              <h1>Subscribe to our news-letter</h1>
            </div>
            <div className="text-lg">
              <h3>
                The latest news,articles and resources <br></br>sent to your
                inbox
              </h3>
            </div>
            <div>
              <form className="flex flex-col gap-4">
                <input
                  type={"email"}
                  placeholder="Enter your email"
                  className="rounded-lg py-1 px-1 w-full"
                />
                <button
                  type={"submit"}
                  className="bg-cobalt  rounded-lg w-full py-1 hover:bg-lightGray hover:text-black duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="pt-2 flex justify-end">
          <p>All Rights Reserved Minhas(2019-2023)</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
